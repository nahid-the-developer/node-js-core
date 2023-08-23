// OS
const os = require('os');

// // // we can use diss track 
// // const {totalmem, hostname} = require('os');

// // totalmem = byte 
// // kb = byte/1024
// // mb = kb/1024
// // gb = mb/1024
// // dosomic er por jeno 4 ghor dakay
// // result = gb.toFixed(4)
// //console.log(result);

console.log((((os.totalmem()/1024)/1024)/1024).toFixed(4));


// file name and directory name 
console.log(__dirname);
console.log(__filename);

// PATH
const path = require ('path')

console.log(path.extname("index.html"));
console.log(path.join(__dirname + "/nahid"));
console.log(path.join(__dirname + "/../nahid"));
