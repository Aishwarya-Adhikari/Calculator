const display =document.querySelector('.display');


const buttons = document.querySelectorAll('.button');

buttons.forEach((item)=>{
   item.onclick= ()=>{
    if(item.id=='clear'){
        display.innerText='';
   }
   else if(item.id=='backspace'){
        let string = display.innerText.string();
        display.innerText = string.substr(0,string.length-1);
   }

   
}
})