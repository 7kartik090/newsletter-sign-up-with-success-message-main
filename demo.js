const mailLabel = document.getElementById('mail-label');
const mailInput = document.getElementById('mail');
// const pics = document.getElementById('pics');

mouseinsidemail = () => {
    mailLabel.style.transform = 'translateX(-100px) translateY(-30px)';
    mailLabel.style.zIndex = 0;
    mailInput.placeholder = "";
}

mouseoutsidemail = () => {
    mailLabel.style.zIndex = -1;
    mailLabel.style.transform = 'translateX(10px)';
    mailInput.placeholder = "enter your email address";
}