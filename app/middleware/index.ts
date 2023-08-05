module.exports = function (model) {
	var module = {};

	module.auth = require('./auth.ts')(model);
	module.admin = require('./admin.ts')(model);
	return module;
}