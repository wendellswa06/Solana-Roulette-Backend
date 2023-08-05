module.exports = function (Sequelize, Schema) {
	var module = {};
	try {
		module.Cms = require('./cms.ts')(Sequelize, Schema);
		module.Setting = require('./setting.ts')(Sequelize, Schema);
		module.Community = require('./community.ts')(Sequelize, Schema);
		module.User = require('./user.ts')(Sequelize, Schema);
		module.HouseWallet = require('./houseWallet.ts')(Sequelize, Schema);

		module.Chat = require('./chat.ts')(Sequelize, Schema);
		module.Deposit = require('./deposit.ts')(Sequelize, Schema, module.User);
		module.Withdraw = require('./withdraw.ts')(Sequelize, Schema, module.User);
		module.BetHistory = require('./bet_history.ts')(Sequelize, Schema, module.User);
		module.Roulette = require('./roulette.ts')(Sequelize, Schema, module.User, module.Roulette);
		module.RouletteHistory = require('./roulette_history.ts')(Sequelize, Schema, module.User, module.Roulette);
		module.CurrencyMaster = require('./currency.ts')(Sequelize, Schema);	
		module.WinnerLogMaster = require('./winner_log.ts')(Sequelize, Schema, module.User,module.CurrencyMaster);

	} catch (error) {
		console.log(error);
	}
	
	return module;
}
