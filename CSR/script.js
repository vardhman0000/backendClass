console.log("Vardhman Jain");

let arr = ["ABC", "DEF", "GHI"];

let body = document.querySelector("body");

for(let i=0; i<arr.length; i++){
    let li = document.createElement("li");
    li.append(arr[i]);
    body.append(li);
}