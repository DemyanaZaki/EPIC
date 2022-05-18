// change navbar style on scroll

window.addEventListener(
    'scroll' , 
    ()=> {document.querySelector('nav').classList.toggle('window-scroll' , window.scrollY > 50)}
)

//tablet show / hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click' , () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline";
    menuBtn.style.display = "none";
})

// close nav menu 

const closeNav = () =>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click' , closeNav)




//add a class to container when click on sign up nutton

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".forms");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});






// sign up validation

window.onload=pageLoad;
function pageLoad(){
	var Form = document.getElementById("sign-up-form");
	Form.onsubmit= checkInputs;
}

const signupform = document.getElementById('sign-up-form');

const username = document.getElementById('username');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const password= document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');


signupform.addEventListener('submit' , e => {
    e.preventDefault();
	
	checkInputs();
});

function checkInputs(){
    var check = true;

    	// trim to remove the whitespaces
    var usernameValue = username.value.trim(); 
    var phoneValue = phone.value.trim();
	var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var confirmpasswordValue = confirmpassword.value.trim();

    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(usernameValue === ' '){setError(username , 'Username can NOT be blank'); check= false;}    // add error and show error class
    // else if (usernameValue.length < 8 ) {setError(usernameValue, 'Phone must be at least 8 character.'); check = false;}
    else{setSuccess(username); check= true;}          //add success class

    if(phoneValue === ' '){setError(phoneValue , 'Phone can NOT be blank'); check= false;}
    else if (phoneValue.length < 8 ) {setError(phoneValue, 'Phone must be at least 8 character.'); check= false;}
    else if (!phone.match(/^[0-9]{11}$/) ) {setError(phoneValue, 'Phone is not valid.'); check= false;}
    else{setSuccess(phoneValue); check= true;}

    if(emailValue === ' ') {setError(email, 'Email can NOT be blank'); check= false;} 
    else if (! isEmail(emailValue) && !email.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/)) {setError(email, 'NOT a valid email'); check= false;} 
    else {setSuccess(email); check= true;}
	
	if(passwordValue === ' ') {setError(password, 'Password can NOT be blank'); check= false;}
    else if ( passwordValue.match(numbers)) {setError(password, 'Password must include 1 digit at least.'); check= false;}
    else if (passwordValue.match(upperCaseLetters) ) {setError(password, 'Password must start with UPPERCASE character.'); check= false;}
    else if (passwordValue.match(specialCharacter) ) {setError(password, 'Password must include 1 special character at least.'); check= false;}
    else if (passwordValue.match(' ')) {setError(password, 'Password can NOT include any white spaces.'); check= false;}
    else if (!password.match(/^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{8}$/)) 
            {setError(password, 'Password must contain at least 1 uppercase, one lowercase, one number ,and one special character.'); check= false;}
    else if (passwordValue.length < 8 ) {setError(password, 'Password must be 8 characters.'); check= false;}
    else {setSuccess(password); check= true;}
	
	if(confirmpassword === ' ') {setError(confirmpassword, 'Password confirm can NOT be blank'); check= false;} 
    else if(passwordValue !== confirmpasswordValue) {setError(confirmpassword, 'Passwords does NOT match'); check= false;} 
    else{setSuccess(confirmpassword); check= true;}

   // return check;
}

function setError(input , message){
    const inputField = input.parentElement; //input-field
	const small = inputField.querySelector('small');
	inputField.className = 'input-field error';   //add error class
	small.innerText = message;  //add error message inside small tag
}

function setSuccess(input){
    const inputField = input.parentElement ; //input-field
    inputField.className = 'input-field success';     //add error class
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


/////////////////////////////////////////////////////////////////////////////////////////////
/*
function CheckPassword(inputtxt) 
{ 
var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
if(inputtxt.value.match(paswd)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
}  







function CheckPassword(inputtxt) 
{ 
var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
if(inputtxt.value.match(decimal)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
} 







function validatePassword(pw) {

    return /[A-Z]/       .test(pw) &&
        /[a-z]/       .test(pw) &&
        /[0-9]/       .test(pw) &&
        /[^A-Za-z0-9]/.test(pw) &&
        pw.length > 4;

}

if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/.test(pwd)){
   // valid password
}


*/


////////////////////////////////////////////////////////////////////////


// window.onload=pageLoad;
// function pageLoad(){
// 	var Form = document.getElementById("sign-up-form");
// 	Form.onsubmit= validate;
// }
// function validate(){
// 	var check = true;


//     var username = document.getElementById('username').value;
//     var phone = document.getElementById('phone').value;
//     var email = document.getElementById('email').value;
//     var password= document.getElementById('password').value;
//     var confirmpassword = document.getElementById('confirmpassword').value;

	
// 	if(username == ""){
// 		alert('First-Name is required !');
// 		check= false;
// 	}
// 	if(username == ""){
// 		alert('Last-Name is required !');
// 		check= false;
// 	}

// 	if(email == ""){
// 		alert('E-mail is required !');
// 		check= false;
// 	}

// 	if(password == ""){
// 		alert('Password is required !');
// 		check= false;
// 	}

//     if(password == confirmpassword){
// 		alert('Do NOT match');
// 		check= false;
// 	}
	
// 	if (phone == "") {
// 		alert('Phone is required !');
// 	}
	
// 	if (!username.match(/^[A-Za-z ]+$/)){ 
// 		alert("only letters or space allowed in name field");
// 		check= false;
// 	}
// 	if (!username.match(/^[A-Za-z ]+$/)){ 
// 		alert("only letters or space allowed in name field");
// 		check= false;
// 	}
// 	if (!email.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/)){
// 		alert("Email is Not Valid");
// 		check=false;
// 	}

// 	if (!password.match(/^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{8}$/)){
// 		alert("Password is Not Valid, It must contain 8 characters: 1 uppercase, one lowercase, one number and one special character at least");
// 		check=false;
// 	}
	
// 	if (!phone.match(/^[0-9]{11}$/)){

// 		alert("Phone is not valid");
// 		check=false;
// 	}
// 	if(check==true){
// 		alert('thanks '+username+" "+' for join to us');
// 		window.location.href='index.html';
// 	}
// 	return check;
// }

