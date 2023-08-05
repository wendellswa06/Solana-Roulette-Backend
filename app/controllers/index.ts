module.exports = function (model) {
	var module = {};
	module.admin = require('./admin.ts')(model);
	module.web = require('./web.ts')(model);
	return module;
}	