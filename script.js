const submitBtn = document.querySelector('.submit-btn');
const username = document.querySelector(".name");
const mail = document.querySelector(".mail");
const message = document.querySelector(".message");
const success = document.querySelector(".alert-success");
const danger = document.querySelector(".alert-danger");
const names = document.querySelector(".hide-names");
const mails = document.querySelector(".hide-mails");
const messages = document.querySelector(".hide-messages");


// function submitBtnfunvtion()  {
//     if (username.value === "" || mail.value === '' || message.value === '') {
//         success.style.display = 'none' 
//         danger.style.display = 'block'
        
//         timeout()
//     }else {
//         danger.style.display = 'none'
//         success.style.display = 'block'   
//        username.value = ''
//         mail.value = ''
//          message.value = ''

//         timeout()
//     }  
// }


function submitBtnfunvtion()  {
    if ( username.value === "" ) {
        names.style.display = 'block' 
        mails.style.display = 'none'
        messages.style.display = 'none'
        success.style.display = 'none'
         
        timeout()
    } 
    else if (mail.value === "") {
        mails.style.display = 'block'
        names.style.display = 'none' 
        success.style.display = 'none' 
        messages.style.display = 'none'
        timeout()
    } else if (message.value === "") {
        messages.style.display = 'block'
        mails.style.display = 'none'
        success.style.display = 'none' 
        names.style.display = 'none'
        timeout()
    }else {
        danger.style.display = 'none'
        success.style.display = 'block'
        mails.style.display = 'none'
        names.style.display = 'none' 
        messages.style.display = 'none'
       username.value = ''
        mail.value = ''
         message.value = ''

        timeout()
    }
    
        timeout()
    }
   





 // remove alert 


 function timeout() {
    setTimeout(function(){
        success.style.display = 'none' 
        danger.style.display = 'none'
        mails.style.display = 'none'
        names.style.display = 'none' 
        messages.style.display = 'none'

    }, 3000 );
 }

   

