
var  express = require('express');

var app = express();


var middleware = {

	requireAuthentication: function (req, res, next){
		console.log('private route');
		next();
	},
	logger: function(req, res, next){
		console.log(req.method);
		next();
	}
};



app.get('/about', middleware.logger, function(req, res){

	res.send('yo');
});

app.use(express.static(__dirname));


app.listen(3000, function(){
	console.log('server started...');
});
