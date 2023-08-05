module.exports = function (app, model, controllers) {
	require('./admin.ts')(app, model, controllers.admin);
	require('./web.ts')(app, model, controllers.web);
}	