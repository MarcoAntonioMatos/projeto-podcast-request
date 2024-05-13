let emailInput = document.getElementById('email');
let submitBtn = document.getElementsByClassName('btn')[0];

const errorMsg = document.getElementById('error');

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()

    const emailValue = emailInput.value;
    emailValue.trim();
    if(emailValue == '' || !emailValue.match(/^[A-Za-z\._\-0-9]+@[A-Za-z\.\-]+\.[a-z]{2,4}$/)){
        errorMsg.innerText = "Oops! please check your email" ;

        setTimeout(() => {
            errorMsg.innerText = '';
        }, 3000);
        return ;
    }  
})

