const { isUtf8 } = require("buffer");
const fs=require ("fs");

function readFile(){
fs.readFile("a.txt", "utf-8", function (err,data){
    console.log(data);
})

/*for (let i = 0; i < 95685685458; i++) {
    console.clear();
    const element = i++;
    console.log(element);
    
}*/


}

readFile();