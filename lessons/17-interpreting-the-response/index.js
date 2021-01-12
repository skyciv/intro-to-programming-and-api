const skyciv = require('skyciv');
const fs = require('fs');

// ========== FROM PREVIOUS LESSON ==============================================================
// Create auth object
const auth = {
	username: 'steve.richardson@skyciv.com',
	key: 'xgVD63hAGbQ0b5KTHFlNMii2PcxbZhAVGkDBhfDqNnlkqGproea2ifnY7APn4lKB',
};

// Create options object - this is the default values so you could instead omit the entire object
const options = {
	validate_input: true,
	response_data_only: false,
};

// Create the api object and add auth and options
const apiObject = {
	auth: auth,
	options: options,
};

// Creating the s3d_model
const s3dModel = {
	settings: {
		units: 'metric',
		vertical_axis: 'Y',
		evaluation_points: 15,
	},
	nodes: {
		1: {
			x: 0,
			y: 0,
			z: 0,
		},
		2: {
			x: 5,
			y: 0,
			z: 0,
		},
	},
	members: {
		1: {
			node_A: 1,
			node_B: 2,
			section_id: 1,
			fixity_A: 'FFFfff',
			fixity_B: 'FFFfff',
		},
	},
	sections: {
		1: {
			load_section: ['Australian', 'Steel (300 Grade)', 'Universal beams', '150 UB 18.0'],
			material_id: 1,
		},
	},
	materials: {
		1: {
			id: 1,
			name: 'Structural Steel',
			density: 7850,
			elasticity_modulus: 200000,
			poissons_ratio: 0.27,
			yield_strength: 260,
			ultimate_strength: 410,
			class: 'steel',
		},
	},
	supports: {
		1: {
			node: 1,
			restraint_code: 'FFFfff',
		},
		2: {
			node: 2,
			restraint_code: 'RFFffr',
		},
	},
	point_loads: {
		1: {
			type: 'm',
			member: 1,
			position: 30,
			x_mag: 0,
			y_mag: -10,
			z_mag: 0,
			load_group: 'LG1',
		},
	},
};

// Creating the functions array
const functions = [
	{
		function: 'S3D.session.start',
		arguments: {
			keep_open: false,
		},
	},
	{
		function: 'S3D.model.set',
		arguments: {
			s3d_model: s3dModel,
		},
	},
	{
		function: 'S3D.model.solve',
		arguments: {
			analysis_type: 'linear',
		},
	},
	{
		function: 'S3D.design.member.check',
		arguments: {
			design_code: 'AS_4100-1998',
			s3d_model: s3dModel,
		},
	},
	{
		function: 'S3D.file.save',
		arguments: {
			name: 'simple-beam-test',
			path: 'api/intro-to-programming/',
		},
	},
];

// Adding the functions array to the api object
apiObject['functions'] = functions;

// Import the skyciv package at the top of this script

// Create a function to handle the response
function apiCallback(res) {
	// Add the response to a file for inspection
	// Import the fs module at the top of the file
	fs.writeFileSync('lessons/17-interpreting-the-response/jsOutput.json', JSON.stringify(res));

	// ========== THIS LESSON =======================================================================

	// FYI: Traditional way to loop - "in" will loop array index (0,1,2,3,4) and of will loop the values (each object in the array)
	for (fn of res.functions) {
		if (fn.function === 'S3D.model.solve') {
			// Do something with the function results
		}
	}

	// Modern way to loop an array - use the array method forEach.
	res.functions.forEach((fn) => {
		// Check if fn is the solve function
		if (fn.function === 'S3D.model.solve') {
			// Do something with the function results
			const loadGroup1 = fn.data['0'];

			// Get peak displacements
			const peakResults = loadGroup1.member_peak_results;
			const peakDispMinY = peakResults.displacement_local_y.min;
			const peakDispMaxY = peakResults.displacement_local_y.max;

			// Get max stress
			const memberMaximums = loadGroup1.member_maximums;
			const topCombinedStressZ = memberMaximums.top_combined_stress_z['1'];
			const btmCombinedStressZ = memberMaximums.btm_combined_stress_z['1'];

			// Check deflection criteria
			const allowableDisp = 5000 / 300; // ~16.67
			const maxDispPass = Math.abs(peakDispMaxY) < allowableDisp;
			const minDispPass = Math.abs(peakDispMinY) < allowableDisp;

			if (maxDispPass && minDispPass) {
				console.log('Displacement is ok! 🥳');
			} else {
				console.log('Displacement criteria failed 😔');
			}

			// Check stress criteria
			const allowableStress = 270; // Say 270MPa
			const topStressPass = Math.abs(topCombinedStressZ) < allowableStress;
			const btmStressPass = Math.abs(btmCombinedStressZ) < allowableStress;

			if (topStressPass && btmStressPass) {
				console.log('Stress criteria passed! 🎉');
			} else {
				console.log('Stress criteria failed! 😥');
			}
		}
	});
}

// Make the call!
skyciv.request(apiObject, apiCallback);
