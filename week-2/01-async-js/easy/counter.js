let counter=1;

// function fcounter(){
//     setInterval(() => {
//         console.clear();
//         console.log(`The count is ${counter}`);
//         counter++;
//     }, 1000);

// }



function fcounter2() {
    

    setInterval(() => {
        let Newdate = new Date();  
        let Hours = Newdate.getHours();
        let minute=Newdate.getMinutes();
        let second=Newdate.getSeconds(); 
        console.clear(); 
        console.log(`The date is ${Hours}:${minute}:${second} `);
       
    }, 1000);  
}

fcounter2();

