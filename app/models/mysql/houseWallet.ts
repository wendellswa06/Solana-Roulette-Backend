module.exports = function(Sequelize, Schema){

	try {
		var HouseWallet = Schema.define('house_wallets', {
			address:{
			  type: Sequelize.STRING
			},
			password:{
			  type: Sequelize.STRING
			},
		  }, {underscored: true});
	  
		  HouseWallet.sync({force: false});
	  
		  return HouseWallet;
	} catch (error) {
		console.log(error)
	}


	
}