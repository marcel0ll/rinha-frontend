module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{html,js,css,ttf,png}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
