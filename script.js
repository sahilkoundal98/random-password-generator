let passwordbox = document.getElementById('password');
const length = 12;
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '@#%&*!';
const allChars = upperCase + lowerCase + symbol + number;


function generatePassword () {
    let password = '';
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += number[Math.floor(Math.random()*number.length)];

    while(password.length<length) {
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }

    passwordbox.value = password;
}

function copyPassword(){
    passwordbox.select();
    document.execCommand("copy");
}