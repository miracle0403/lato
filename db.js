var mysql = require('mysql');
var server = require ('./app.js');

var ool = mysql.createConnection({
  host     : 'localhost',
  user     : 'b663c78196ecd2',
  password : 'dce905d2',
  database : 'heroku_11328878f1ace6d'
});
	
pool.connect();

pool.query( 'SELECT 1 + 4 AS solution', function ( err, results, fields ){
	if ( err ) throw err;
	else{
		console.log( 'solution is ' + results[0].solution);
	}
});
pool.end();

module.exports = pool;