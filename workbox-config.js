module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{html,js,css,ttf}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
