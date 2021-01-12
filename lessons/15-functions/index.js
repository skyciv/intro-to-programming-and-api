// ========== FROM PREVIOUS LESSON ==============================================================
// Create auth object
const auth = {
	username: 'YOUR_SKYCIV_USERNAME',
	key: 'YOUR_SKYCIV_API_KEY',
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

//  ========== THIS LESSON =======================================================================

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
