var mysql = require('mysql');
var server = require ('./app.js');

var pool  =  mysql.createPool({
  multipleStatements: true,
  connectionLimit : 100,
  waitForConnections: true,
  host: "localhost",
  user: "root",
  password: '',
  database: 'lato'
}) ||  mysql.createPool({
  multipleStatements: true,
  connectionLimit : 100,
  waitForConnections: true,
  DB_HOST: "us-cdbr-iron-east-02.cleardb.net",
  DB_USERNAME: "be7a31828dd94c",
  DB_PASSWORD: '8db565a4',
  DB_DATABASE: 'heroku_1a05b6fa384c55e'
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