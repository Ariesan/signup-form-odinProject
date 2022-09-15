// warn user because pasword don't match

const password = document.getElementById('pwd');
const confirmPassword = document.getElementById('c-pwd');
    function validatePassword() {
        if ((confirmPassword.value!='')&&(password.value != confirmPassword.value)) {
            document.getElementById('errorMsg').innerHTML="*Passwords don't match";
        } else {
            document.getElementById('errorMsg').innerHTML='';
        }
    }
    password.onchange = validatePassword;
    confirmPassword.onkeyup = validatePassword;