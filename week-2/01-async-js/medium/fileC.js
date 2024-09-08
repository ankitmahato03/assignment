const fs = require("fs");
function fileCleaner() {
  fs.readFile("a.txt", "utf-8", function (err, data) {

    let writData = data.replace(/\s+/g," ").trim();
    console.log(writData);
fs.writeFile("a.txt", writData,(err)=>{
    if (err) {
    console.log("error in data appeend");        
    }
    else{
        console.log("sucessfull")
    }
})

  });
}

fileCleaner();
