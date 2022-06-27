const outputEl = document.querySelector('.out-put');
const deleteBtn = document.querySelector('.clear')

//button collection
const button1 = document.querySelector('.btn1');
const button2 = document.querySelector('.btn2');
const button3 = document.querySelector('.btn3');
const button4 = document.querySelector('.btn4');
const button5 = document.querySelector('.btn5');
const button6 = document.querySelector('.btn6');
const button7 = document.querySelector('.btn7');
const button8 = document.querySelector('.btn8');
const button9 = document.querySelector('.btn9');
const button10 = document.querySelector('.btn10');
const hash = document.querySelector('.hash');
const zeroBtn = document.querySelector('.zeroBtn');


let valueArray = []
let valueOut = ''


const enterValue = (value)=>{
    valueArray.push(value);
    valueOut = valueArray.join('');
    outputEl.textContent = valueOut
}

const deleteLetter = ()=>{
    
const popup = document.querySelector('.cutomer-popup');
const bardiv = document.querySelector('.loading-bar');
const backdrop = document.querySelector('.backdrop');

if(valueArray.length <= 0){
popup.classList.add('openPopup');
bardiv.classList.add('bar-close');
backdrop.classList.add('openBackdrop');
bardiv.addEventListener('transitionend',()=>{
popup.classList.remove('openPopup');
bardiv.classList.remove('bar-close');
backdrop.classList.remove('openBackdrop');
})

}

const updatedValue = valueArray.pop();
const printValue = valueArray.join('')
outputEl.textContent = printValue;
}

//event anitialization 
button1.addEventListener('click',()=>enterValue(1))
button2.addEventListener('click',()=>enterValue(2))
button3.addEventListener('click',()=>enterValue(3))
button4.addEventListener('click',()=>enterValue(4))
button5.addEventListener('click',()=>enterValue(5))
button6.addEventListener('click',()=>enterValue(6))
button7.addEventListener('click',()=>enterValue(7))
button8.addEventListener('click',()=>enterValue(8))
button9.addEventListener('click',()=>enterValue(9))
button10.addEventListener('click',()=>enterValue('*'))
zeroBtn.addEventListener('click',()=>enterValue(0))
hash.addEventListener('click',()=>enterValue('#'))
deleteBtn.addEventListener('click',()=> deleteLetter())