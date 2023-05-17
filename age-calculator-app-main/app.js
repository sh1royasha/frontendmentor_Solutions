const inputs = document.querySelectorAll('.inputs input');
const btn = document.querySelector('.submit-btn');
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const dayOutput = document.querySelector("#DD");
const monthOutput = document.querySelector("#MM");
const yearOutput = document.querySelector("#YY");


const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

btn.addEventListener('click',()=>{
    let valid = true;

    inputs.forEach(input=>{
        if(input.value === ''){
            input.parentElement.classList.add('error');
            input.nextElementSibling.innerHTML = 'This field is required';
            valid = false;
        }else{
            input.parentElement.classList.remove('error');
            input.nextElementSibling.innerHTML = '';
        }
    })

    const dia = inputs[0],
    mes = inputs[1],
    anio = inputs[2];

    if(mes.value > 12 || mes < 1){
        mes.parentElement.classList.add('error');
        mes.nextElementSibling.innerHTML = 'Must be valid for this month.';
        valid = false;
    }

    if(dia.value > months[mes.value-1] || dia.value < 1 ){
        dia.parentElement.classList.add('error');
        dia.nextElementSibling.innerHTML = 'Must be valid for this day.';
        valid = false;
    }

    if(valid){

        if(dia.value > day){
            day = day + months[month - 1];
            month = month - 1;
        }

        if(mes.value > month){
            month = month + 12;
            year = year - 1;
        }

        const d = day - dia.value;
        const m = month - mes.value;
        const y = year - anio.value;

        dayOutput.innerHTML = d;
        monthOutput.innerHTML = m;
        yearOutput.innerHTML = y;
    }
    
})
