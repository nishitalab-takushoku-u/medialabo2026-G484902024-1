function greeting() {
    let l =document.querySelector('input[name="left"]');
    let left = l.value;
    let n = Number(left);
    let r =document.querySelector('input[name="right"]'); 
    let right = r.value;
    let s = Number(right); 
    let span=document.querySelector('span#answer');
    span.textContent=n+s;
}
let b = document.querySelector('button#calc');
b.addEventListener('click',greeting);
