let submitButton = document.getElementById("submitButton");

let errors={
    
}

submitButton.addEventListener("click",function(e){
     e.preventDefault();
     errors={};
     let signupForm = document.forms["signupForm"];
     //console.log(signupForm);
 let fristNameInput =signupForm.fristName;
 let lastNameInput =signupForm.lastName;
 let emailAddressInput =signupForm.emailAddress;
 let passwordInput =signupForm.password;
 
  
  if(fristNameInput.value==""){
     errors.fristName="fristName should not be empty";
  }

  if(lastNameInput.value==""){
     errors.lastName="lastName should not be empty"; 
  }
  if(emailAddressInput.value==""){
    errors.emailAddress="email address should not be empty"
  }
  if(passwordInput.value==""){
    errors.password="Password should not be empty";
  }
  if(passwordInput.value.length <= 5){
    errors.password="Minimum 6 characters are needed";  
  }
  console.log(errors, passwordInput.value.length); 

 for(let error in errors){
     let lastNameGroup=document.getElementById(`${error}Group`);
     let lastNameMessage=document.querySelector(`#${error}Group .message`);
     lastNameGroup.classList.add("error");
     lastNameMessage.textContent = errors[error];
     
    }
    if(Object.keys(errors).length==0){
        signupForm.submit();
    }

 
});
    

