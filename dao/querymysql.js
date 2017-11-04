var mysql = require('mysql')
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'zabbix',
    password : '123456',
    database : 'stock',
});

connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
//   });

var sql = 'select * from stock_info';

//查询
// connection.query(sql,function(err,result){
//     if(err){
//         console.log('[SELECT ERROR] - ',err.message);
//         return;
//     }

//     console.log('--------------------------SELECT----------------------------');
//     console.log(result);
//     console.log('------------------------------------------------------------\n\n'); 
// });

// var  addSql = 'INSERT INTO stock_info(stock_code,stock_name,type) VALUES(?,?,?)';
// var  addSqlParams = ['600115', '东方航空',1];
//增
// connection.query(addSql,addSqlParams,function (err, result) {
//         if(err){
//          console.log('[INSERT ERROR] - ',err.message);
//          return;
//         }        
 
//        console.log('--------------------------INSERT----------------------------');
//        //console.log('INSERT ID:',result.insertId);        
//        console.log('INSERT ID:',result);        
//        console.log('-----------------------------------------------------------------\n\n');  
// });

var modSql = 'UPDATE stock_info SET stock_code = ?,stock_name = ? WHERE Id = ?';
var modSqlParams = ['600115', '东方航空',2];
//改
// connection.query(modSql,modSqlParams,function (err, result) {
//    if(err){
//          console.log('[UPDATE ERROR] - ',err.message);
//          return;
//    }        
//   console.log('--------------------------UPDATE----------------------------');
//   console.log('UPDATE affectedRows',result.affectedRows);
//   console.log('-----------------------------------------------------------------\n\n');
// });

var delSql = 'DELETE FROM stock_info where id=6';
//删
connection.query(delSql,function (err, result) {
        if(err){
          console.log('[DELETE ERROR] - ',err.message);
          return;
        }        
 
       console.log('--------------------------DELETE----------------------------');
       console.log('DELETE affectedRows',result.affectedRows);
       console.log('-----------------------------------------------------------------\n\n');  
});
 

connection.end();