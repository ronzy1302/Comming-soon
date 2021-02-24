function validateEmail(e) {
    e.preventDefault();

    let email = document.querySelector('.mail').value;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(email) == false) {
        document.querySelector('form').classList.add('invalid');
        document.querySelector('.validate-msg').textContent = 'please provide a valid email';
        return false;
    } else {
        document.querySelector('.mail').value = '';
        document.querySelector('form').classList.remove('invalid');
        document.querySelector('.validate-msg').textContent = 'Successfull';
        document.querySelector('.validate-msg').style.textDecorationLine = 'underline';
    }
    return true;
}

document.querySelector('form').addEventListener('submit', validateEmail);