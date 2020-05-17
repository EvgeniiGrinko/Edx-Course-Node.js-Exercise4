var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('myDatabase1.db');
// db.serialize(function(){
//     db.run('CREATE TABLE Contacts (first_name TEXT, last_name TEXT, age INTEGER)');
//     db.run('INSERT INTO Contacts VALUES ("John", "Doe", 25)');
// });
// db.close();
// var express = require('express');
// var app = express();
// var port = 3000;
// var bodyParser = require('body-parser');

// app.get('/', function(request, response){
//     response.send("Get request received at '/'");
// });
// app.listen(port, function(){
//     console.log('Listening on port 3000');
// });
// db.all('SELECT * FROM Contacts', processRows1);

// function processRows1(err, rows){
//   if(err){
//     console.log("ERROR: " + err.message);
//   }
//   else{
//     for(var i = 0; i < rows.length; i++){
//       console.log(rows[i]);
//     }
//   }
// };
db.each('SELECT * FROM Contacts', processRow);

function processRow(err, row){
    if(err){
        console.log("ERROR: " + err.message);
    }
    else{
        console.log(row);
    }
};
var firstName = 'John'
db.get('SELECT * FROM Contacts WHERE first_name = ?', [firstName], function(err, row){
    if(err){
      console.log("ERROR: " + err.message);
    }
    else{
      console.log(row.age);
    }
  });

