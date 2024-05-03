const form=document.querySelector('form');
const emailInput=document.getElementById('email');
const inputContainer=document.querySelector('.input-container');
const error=inputContainer.nextElementSibling;
const emailRegExp=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const errorIcon=`<svg class="invalid" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g fill="none" fill-rule="evenodd"><circle cx="12" cy="12" r="12" fill="#F96464"/><path fill="#FFF" fill-rule="nonzero" d="M13.256 6v9.056h-2V6h2zm-.944 12.464c-.384 0-.699-.104-.944-.312a1.027 1.027 0 0 1-.368-.824c0-.33.125-.608.376-.832.25-.224.563-.336.936-.336.373 0 .68.112.92.336.24.224.36.501.36.832 0 .341-.117.616-.352.824-.235.208-.544.312-.928.312z"/></g></svg>`; 
const errorContainer=document.getElementById('error-container');
// window.addEventListener('load',()=>{
//     error.textContent="";
//     inputContainer.classList.remove('active');
// })


form.addEventListener('submit',(e)=>{
    // console.log(emailInput.value);
    if(!emailRegExp.test(emailInput.value)){
        e.preventDefault();
        showError();
        emailInput.addEventListener('input',()=>{
            if(!emailInput.value){
                error.textContent="";
    inputContainer.classList.remove('invalid');
    errorContainer.innerHTML="";
    emailInput.removeEventListener('input',()=>{});
            }
        })
    }
    
});
const showError=()=>{
    error.textContent="Please enter a valid email";
    inputContainer.classList.add('invalid');
    errorContainer.innerHTML=errorIcon;
}