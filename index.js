const inputA = document.querySelector(".js-input-a")
const inputB = document.querySelector(".js-input-b")
const clear = document.querySelector(".js-clear")
const Result = document.querySelector(".js-result")
const Output = document.querySelector(".js-output")
const history = []
const historyDiv = document.querySelector(".js-history")
const SelectOperation = document.querySelector(".js-select-operation")
clear.addEventListener('click', ()=>{
    history.length = 0
    historyDiv.innerHTML=''
    Output.textContent = ''; 
    inputA.value = '';
    inputB.value = '';});
Result.addEventListener('click',()=>{
    if (!inputA.value || !inputB.value) {
        alert('Error!');
        return;}
const a = Number(inputA.value);
const b = Number(inputB.value);
const operation = SelectOperation.value; 
if(operation==='/'&&b===0){
    alert("на ноль делить нельзя")
    return;}
    const result = calculate({a, b, operation})
    history.push(`${a} ${operation} ${b} = ${result}`);
    historyDiv.innerHTML = history.join("<br>")
    Output.textContent = `${result}`;
    console.log(result)});
