const blocks = document.querySelectorAll(".col");
console.log(blocks);
let toggle = false;
blocks.forEach(element => {
    element.onclick = ()=>{
        if(toggle){
            element.style.backgroundColor = "blue";
            toggle = false;
        }
        else{
            element.style.backgroundColor = "red";
            toggle = true;
        }
        checkwinn();
    }
});
for(let i=0;i<blocks.length;i++){
    
}