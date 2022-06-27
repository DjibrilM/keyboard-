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


const enterValue = (value,event)=>{
    event.preventDefault()
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
button1.addEventListener('click',(event)=>enterValue(1,event))
button2.addEventListener('click',(event)=>enterValue(2,event))
button3.addEventListener('click',(event)=>enterValue(3,event))
button4.addEventListener('click',(event)=>enterValue(4,event))
button5.addEventListener('click',(event)=>enterValue(5,event))
button6.addEventListener('click',(event)=>enterValue(6,event))
button7.addEventListener('click',(event)=>enterValue(7,event))
button8.addEventListener('click',(event)=>enterValue(8,event))
button9.addEventListener('click',(event)=>enterValue(9,event))
button10.addEventListener('click',(event)=>enterValue('*',event))
zeroBtn.addEventListener('click',(event)=>enterValue(0,event))
hash.addEventListener('click',(event)=>enterValue('#',event))
deleteBtn.addEventListener('click',()=> deleteLetter())