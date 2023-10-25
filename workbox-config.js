module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{html,js,css,woff2,png}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
