const sum=(a,b)=>{
    console.log(a+b);
}
const diff=(a,b)=>{
    console.log(a-b);
}
const product=(a,b)=>{
    console.log(a*b);
}
const divide=(a,b)=>{
    console.log(a/b);
}

// exporting as array
// module.exports=[sum,diff,product,divide]

// exporting as object
module.exports={sum,diff,product,divide}