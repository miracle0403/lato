var mysql = require('mysql');
var server = require ('./app.js');

var pool  =   mysql.createPomysql://b663c78196ecd2:dce905d2@us-cdbr-iron-east-05.cleardb.net/heroku_11328878f1ace6d?reconnect=true});
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