var md5 = require('md5');

function getFilenameFromUrl(url, config) {
	if (config.hashFilenames) {
		const type = url.split('.').pop();
		const filename = md5(url);
		return [filename, type].join('.')
	}
	return url.split('/').slice(-1)[0];
}

exports.getFilenameFromUrl = getFilenameFromUrl;
