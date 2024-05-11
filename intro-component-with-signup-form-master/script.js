const form=document.querySelector('form');
const inputContainer=document.getElementsByClassName('input-container');
const firstName=document.getElementById('fname');
const lastName=document.getElementById('lname');
const email=document.getElementById('email');
const password=document.getElementById('password');
const emailRegExp=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const inputList=[firstName,lastName,email,password];
const errorIcon='<img src="images/icon-error.svg" alt="">';

const validateInput=(input)=>{
    return !input.value||input.type==='email'&&!emailRegExp.test(input.value);
}


form.addEventListener('submit',(e)=>{
    const isError=inputList.some(validateInput);
    if(isError){
        e.preventDefault();
        const errorList=inputList.filter(validateInput);
        showError(errorList);
    }

})

const showError=(errorList)=>{
    errorList.forEach((input,position)=>{
        input.classList.add('error');
        // inputContainer[position].innerHTML+=errorIcon;
    })
}