module.exports = function(Sequelize, Schema, User){
	try {
		var BetHistory = Schema.define('bet_history', {
			game_type:{
			  type: Sequelize.ENUM('coinflip', 'roulette')
			},
			bet_amount:{
			  type: Sequelize.DECIMAL(10, 2),defaultValue:0.00
			}
		  }, {underscored: true});
	  
		  BetHistory.belongsTo(User, { foreignKey: 'user_id', as: 'userDetail' });
		  BetHistory.sync({force: false});
		  return BetHistory;
		  
	} catch (error) {
		console.log(error)
	}

	
}