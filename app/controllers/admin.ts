module.exports = function (model) {
	var module = {};
	const config = require('../../config/constants.ts');
	module.login = require('./admin/login.ts')(model,config);
	module.dashboard = require('./admin/dashboard.ts')(model,config);
	module.user = require('./admin/user.ts')(model,config);
	module.cms = require('./admin/cms.ts')(model,config);
	module.roulette = require('./admin/roulette.ts')(model,config);
	module.setting = require('./admin/setting.ts')(model,config);
	module.deposit = require('./admin/deposit.ts')(model,config);
	module.withdraw = require('./admin/withdraw.ts')(model,config);
	module.houseWallet = require('./admin/houseWallet.ts')(model, config);
	
	return module;
}
