let signupbtn=document.querySelector('.signUpBtn');
let signinbtn=document.querySelector('.signInBtn');
let nameField=document.querySelector('.namefield');
let title=document.querySelector('.title');
// let underline=document.querySelector('.underline');
let text=document.querySelector('.text');

signinbtn.addEventListener('click',()=>{
    nameField.style.maxHeight='0';
    title.innerHTML='Sign In';
    text.innerHTML='Lost password';
    signupbtn.classList.add('disable');
    signinbtn.classList.remove('disable');
    // underline.style.transform='translateX(35px)';
    if(signinbtn.value==' ')
      alert('required');
});

signupbtn.addEventListener('click',()=>{
    nameField.style.maxHeight='60px';
    title.innerHTML='Sign Up';
    text.innerHTML='Password Suggestions';
    signupbtn.classList.remove('disable');
    signinbtn.classList.add('disable');
    // underline.style.transform='translateX(0)';
});

