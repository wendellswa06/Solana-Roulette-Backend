module.exports = function(Sequelize, Schema){
	try {
		var Community = Schema.define('community_master', {
			name : {
				type: Sequelize.STRING
			},		
			mint_key:{
			  type: Sequelize.STRING
			},
			color:{
			  type: Sequelize.STRING
			},
		  }, {underscored: true});
	  
		Community.sync({force: false});
	
		return Community;
	} catch (error) {
		console.log(error)
	}


	
}