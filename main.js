let emailInput = document.getElementById('email');
let submitBtn = document.getElementsByClassName('btn')[0];

const errorMsg = document.getElementById('error');

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()

    const emailValue = emailInput.value;
    emailValue.trim();
    if(emailValue == ''){
        errorMsg.innerText = "Oops! please check your email" ;

        setTimeout(() => {
            errorMsg.innerText = '';
        }, 3000);

        return;
    }  
})

