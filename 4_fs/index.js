const fs = require('fs')

// write and append are same
fs.appendFile('file.txt'," I am a student", (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("successful");
    }
})

// read 
fs.readFile('file.txt', "utf-8", (err, data) =>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})

// file name rename
fs.rename('file2.txt', "file.txt", (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("successful");
    }
})

// exists means ace ki na
fs.exists('file.txt', (result) =>{
    if(result){
        console.log("ace");
    }else{
        console.log("nai");
    }
})