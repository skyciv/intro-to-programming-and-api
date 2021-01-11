/**
 * Adjust the order of the lesson object as you like and add descriptions if you want.
 * `node file-structure-creator.js` to overwrite the file structure to match the object below.
 * The description will be added to the beginning of the JS files, feel free to adjust this script as you like.
 */

const fs = require('fs');

const lessons = [
	{
		title: 'variables',
		description:
			'Variables are a place to hold numbers. \nThere are various types of variables.',
	},
	{ title: 'arrays', description: '' },
	{ title: 'loops', description: '' },
	{ title: 'flow-control', description: '' },
	{ title: 'functions', description: '' },
	{ title: 'objects-and-properties', description: '' },
	{ title: 'other-languages', description: '' },
	{ title: 'vscode', description: "Let's get your coding environment setup!" },
	{ title: 'json-basics', description: 'The anatomy of JSON' },
	{ title: 'working-with-json', description: '' },
	{ title: 'extracting-values-from-json', description: '' },
	{ title: 'skyciv-api-object', description: '' },
	{ title: 'auth-and-options', description: '' },
	{ title: 's3d-model', description: '' },
	{ title: 'functions', description: '' },
	{ title: 'adjusting-settings', description: '' },
	{ title: 'making-the-http-request', description: '' },
	{ title: 'interpreting-the-response', description: '' },
];

/**
 * Create a directory at a path
 * @param {string} path
 */
const createDir = (path) => {
	fs.mkdirSync(path, { recursive: true });
};

/**
 * Create a file at a path. Optionally insert data
 * @param {string} path
 * @param {string} content
 */
const createFile = (path, content = '') => {
	fs.writeFileSync(path, content);
};

/**
 * Create file directory
 */
const main = () => {
	// return console.log(
	// 	`Content has been added to lessons now. back-up the data before running this function.`
	// );

	lessons.forEach((lesson, i) => {
		const { title, description } = lesson;
		const lessonNumber = i + 1;
		const lessonNumberString = lessonNumber < 10 ? `0${lessonNumber}` : `${lessonNumber}`;
		const dirPath = `lessons/${lessonNumberString}-${title}`;
		const formattedTitle = title.replace(/-/g, ' ');

		createDir(dirPath);
		// createFile(`${dirPath}/README.md`, `# ${formattedTitle}`);
		// createFile(`${dirPath}/index.js`, `/*\n${description}\n*/`);
		// createFile(`${dirPath}/index.ipynb`, ``);
	});
};

main();
