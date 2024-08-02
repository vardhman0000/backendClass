const fs = require("fs");
// fs.readFile("./data.txt", "utf-8", (err, data) => {
//     if(err) {
//         console.log("Something went Wrong!!")
//     }
//     else{
//         console.log(data);
//     }
// })
// console.log("Chal Bhag ab !!")


try {
    let data = fs.readFileSync("./data.txt", "utf-8");
    console.log(data);

}
catch(err) {
    console.log("Something went Wrong!!");
}

console.log("Chal Bhag ab !!")


fs.writeFile("./data.txt", "VARDHMAN JAIN", (err) => { 
    if(err){
        console.log("SOMETHING's NOT RIGHT");
    }
    else{
        console.log("DATA LIKH DIA");
    }
})



try{

        fs.writeFileSync("./data.txt", "WRUTE FILE SYNC USE KIYA HAI");
        console.log("LIKH DIA");
}
catch(err){
    console.log("LIKH NHI PA RHA!!");
}


fs.appendFile("./data.txt", "VARDHMAN JAIN AGAIN", (err) => { 
    if(err){
        console.log("SOMETHING's NOT RIGHT");
    }
    else{
        console.log("DATA APPEND KR DIA");
    }
})