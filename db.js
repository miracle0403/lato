var mysql = require('mysql');
var server = require ('./app.js');

var pool  =   mysql.createPool({
  multipleStatements: true,
  connectionLimit : 100,
  waitForConnections: true,
  DB_HOST: "us-cdbr-iron-east-05.cleardb.net",
  DB_USERNAME: "b5dcd57ac4ac9b",
  DB_PASSWORD: '53774de9',
  DB_DATABASE: 'heroku_1aa74e66b278cbb'
});

pool.getConnection( function ( err, con ){
	if ( err ){
		console.log( 'no connection to pool' )
	}
	else{
		con.query( 'SELECT 1 + 4 AS solution', function ( err, results, fields ){
			if ( err ) throw err;
			else{
			console.log( 'solution is ' + results[0].solution);
			pool.releaseConnection( con );
			}
		});
	}
});
module.exports = pool;