import skyciv

# ========== FROM PREVIOUS LESSON ==============================================================
# Create auth object
auth = {
    "username": "steve.richardson@skyciv.com",
    "key": "xgVD63hAGbQ0b5KTHFlNMii2PcxbZhAVGkDBhfDqNnlkqGproea2ifnY7APn4lKB",
}

# Create options object - this is the default values so you could instead omit the entire object
options = {
    "validate_input": True,
    "response_data_only": False
}

# Create the api object and add auth and options
api_object = {
    "auth": auth,
    "options": options
}

# Creating the s3d_model
s3d_model = {
    "settings": {
        "units": "metric",
        "vertical_axis": "Y",
        "evaluation_points": 15
    },
    "nodes": {
        "1": {
            "x": 0,
            "y": 0,
            "z": 0,
        },
        "2": {
            "x": 5,
            "y": 0,
            "z": 0,
        },
    },
    "members": {
        "1": {
            "node_A": 1,
            "node_B": 2,
            "section_id": 1,
            "fixity_A": "FFFfff",
            "fixity_B": "FFFffr",
        },
    },
    "sections": {
        "1": {
            "load_section": ["Australian", "Steel (300 Grade)", "Universal beams", "150 UB 18.0"],
            "material_id": 1
        }
    },
    "materials": {
        "1": {
            "name": "Structural Steel",
            "density": 7850,
            "elasticity_modulus": 200000,
            "poissons_ratio": 0.27,
            "yield_strength": 260,
            "ultimate_strength": 410,
            "class": "steel",
        },
    },
    "supports": {
        "1": {
            "node": 1,
            "restraint_code": "FFFfff",
        },
        "2": {
            "node": 2,
            "restraint_code": "RFFffr",
        },
    },
    "point_loads": {
        "1": {
            "type": "m",
            "member": 1,
            "position": 30,
            "x_mag": 0,
            "y_mag": -10,
            "z_mag": 0,
            "load_group": "LG1"
        },
    },
}

# Creating the functions array
functions = [
    {
        "function": "S3D.session.start",
        "arguments": {
            "keep_open": False
        }
    },
    {
        "function": "S3D.model.set",
        "arguments": {
            "s3d_model": s3d_model
        }
    },
    {
        "function": "S3D.model.solve",
        "arguments": {
            "analysis_type": "linear",
        }
    },
    {
        "function": "S3D.design.member.check",
        "arguments": {
            "design_code": "AS_4100-1998",
            "s3d_model": s3d_model,
        }
    },
    {
        "function": "S3D.file.save",
        "arguments": {
            "name": "simple-beam-test",
            "path": "api/intro-to-programming/"
        }
    }
]

# Adding the functions array to the api object
api_object["functions"] = functions

# Import the skyciv package at the top of this script

# Make the call!
res = skyciv.request(api_object)

# Add it to a file for inspection
with open("lessons/17-interpreting-the-response/pyOutput.json", "w") as f:
    print(res, file=f)

# ========== THIS LESSON =======================================================================

# Modern way to loop an array - use the array method forEach.

for fn in res["functions"]:

    # Check if fn is the solve function
    if (fn["function"] == "S3D.model.solve"):
        # Do something with the function results
        loadGroup1 = fn["data"]["0"]

        # Get peak displacements
        peakResults = loadGroup1["member_peak_results"]
        peakDispMinY = peakResults["displacement_local_y"]["min"]
        peakDispMaxY = peakResults["displacement_local_y"]["max"]

        # Get max stress
        memberMaximums = loadGroup1["member_maximums"]
        topCombinedStressZ = memberMaximums["top_combined_stress_z"]["1"]
        btmCombinedStressZ = memberMaximums["btm_combined_stress_z"]["1"]

        # Check deflection criteria
        allowableDisp = 5000 / 300  # ~16.67
        maxDispPass = abs(peakDispMaxY) < allowableDisp
        minDispPass = abs(peakDispMinY) < allowableDisp

        if (maxDispPass and minDispPass):
            print("Displacement is ok! :D")
        else:
            print("Displacement criteria failed :(")

        # Check stress criteria
        allowableStress = 270  # Say 270MPa
        topStressPass = abs(topCombinedStressZ) < allowableStress
        btmStressPass = abs(btmCombinedStressZ) < allowableStress

        if (topStressPass and btmStressPass):
            print("Stress criteria passed! :)")
        else:
            print("Stress criteria failed! :(")
