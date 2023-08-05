module.exports = function (model) {
	var module = {};

	const config = require('../../config/constants.ts');

	module.auth = require('./web/auth.ts')(model, config);
	module.roulette = require('./web/roulette.ts')(model, config);
	module.profile = require('./web/profile.ts')(model, config);
	
	module.deposit = require('./web/deposit.ts')(model, config);
	module.withdraw = require('./web/withdraw.ts')(model, config);
	
	module.setting = require('./web/settting.ts')(model, config);
	module.user = require('./web/user.ts')(model, config);

	module.houseWallet = require('./web/houseWallet.ts')(model, config);
	return module;
}
