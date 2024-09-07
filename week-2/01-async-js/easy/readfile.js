const { isUtf8 } = require("buffer");
const fs=require ("fs");

function readFile(){
fs.readFile("a.txt", "utf-8", function (err,data){
    console.log(data);
})


}

readFile();