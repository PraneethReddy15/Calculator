var res=document.querySelector("#input-number");
var btn=document.querySelector(".keys");
for(let i=0;i<btn.clientHeight;i++)
{
    btn[i].addEventListener("click",(e)=>{compute(e.target)});

}
res+=innerText="klnacoiqnbsco";
function compute(button)
{
    var a=button.innerText;
    switch(a)
    {
        case "0":
            res.innerText+=a;
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case ".":
        case "=":
        case "+":
        case "*":
        case "%":
        case "/":
        case "r":
        case "1":
        case "1":
        case "p":
        case "c":
        
    }

}
