# ========== FROM PREVIOUS LESSON ==============================================================
# Create auth object
auth = {
    "username": "YOUR_SKYCIV_USERNAME",
    "key": "YOUR_SKYCIV_API_KEY"
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
# ==============================================================================================
# Creating an s3d_model

s3d_model = {
    "settings": {
        "units": 'metric',
        "vertical_axis": 'Y',
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
            "fixity_A": 'FFFfff',
            "fixity_B": 'FFFfff',
        },
    },
    'sections': {
        "load_section": ['Australian', 'Steel (300 Grade)', 'Universal beams', '310 UB 32.0'],
        "material_id": 1,
    },
    "materials": {
        "1": {
            "name": 'Structural Steel',
            "density": 7850,
            "elasticity_modulus": 200000,
            "poissons_ratio": 0.27,
            "yield_strength": 260,
            "ultimate_strength": 410,
            "class": 'steel',
        },
    },
    "supports": {
        "1": {
            "node": 1,
            "restraint_code": 'FFFffr',
        },
        "2": {
            "node": 2,
            "restraint_code": 'RFFffr',
        },
    },
    "point_loads": {
        "1": {
            "type": 'm',
            "member": 1,
            "position": 30,
            "x_mag": 0,
            "y_mag": -10,
            "z_mag": 0,
        },
    },
}
