let navbar=document.getElementById("navLinks")
let opennav=document.getElementById("open");

let closenav=document.getElementById("close");
opennav.addEventListener("click",()=>{
    navbar.style.right="0px";
});
closenav.addEventListener("click",()=>{
    navbar.style.right="-250px";
});
let arr=[10,15,20,30]
for(let i=0;i<4;i++)
{
console.log(arr[i]);
}
alert("javascript");