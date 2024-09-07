const { Console } = require("console");
const fs = require("fs");
const { clearScreenDown } = require("readline");



function writeFile(){
    let Textmassage="\n hello i am your inner voice you will  grow";
    fs.appendFile("a.txt",Textmassage,(err) => { 
        if(err){
            console.log(err)
        }
        else{
            console.log("Data append sucessfully")
        }
    })
}

writeFile();