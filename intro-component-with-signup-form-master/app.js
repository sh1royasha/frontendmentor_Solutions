const btn = document.querySelector('.register_btn');

console.log(btn)

btn.addEventListener('click',e=>{
    e.preventDefault();

    const inputs = document.querySelectorAll('.item input')
    console.log(inputs)

    inputs.forEach(input=>{
        console.log(input.value)
        if(input.value === ""){
            input.parentNode.classList.add('error');
        }else{
            input.parentNode.classList.remove('error');
        }
    })
})