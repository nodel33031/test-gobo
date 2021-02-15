const form =document.getElementById('form');
const username =document.getElementById('username');
// const email =document.getElementById('email');
const password =document.getElementById('password');
const password2 =document.getElementById('password2');

//Show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className ='form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Check account(email) is valid

function validateEmail(username) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(username).toLowerCase());
}

//Check required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value()===''){
            showError(input,'${getFieldName(input)} 請輸入帳號');
        }else{
            showSuccess(input);
        }
    });
  
}
//Check passwords match
function checkPasswordsMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,'密碼不一致');

    }
}




//Get 
// function getFieldName(input){
//     return input.id.charAt(0).toUpperCase()+input.id.slice(1);
// }

//Event listener

form.addEventListener('submit',function(e){
    e.preventDefault();

    // checkRequired([username,,password,password2]);

    // checkPasswordsMatch(password,password2);


    if(username.value ===''){
        showError(username,'請輸入帳號');
    }
    else if(!validateEmail(username.value)){
        showError(username,'格式錯誤');
    
    }
    else{
        showSuccess(username);
    }

    // if(email.value ===''){
    //     showError(email,'Email is required');
    // }else{
    //     showSuccess(email);
    // }

    if(password.value ===''){
        showError(password,'請輸入密碼');
        // console.log(1);
    }else{
        showSuccess(password);
    }


    if(password2.value ===''){
        showError(password2,'請確認密碼');
    }else{
        showSuccess(password2);
    }

    checkPasswordsMatch(password, password2);
});