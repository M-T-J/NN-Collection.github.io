const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});



var submitted = false;

function validateName(){
    var name = document.getElementById('name').value;
    if(!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)){
        alert("Please enter your correct name!");
        return false;
    }

    return true;
    }

    function validateEmail(){
        var email = document.getElementById('email').value;
        if(!email.match(/^[A-Za-z\. \-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            alert("Please enter valid email address!");
            return false;
        }
    
        return true;
        }

        function resetForm(){
            document.getElementById('contact-form').reset();
            console.log('Reset');
        }


        function validateForm(){

            if(!validateName() || !validateEmail()){
                return false;
            }

            else{
                submitted = true;
                var thankyou= 'Your message was sent successfully. Thanks!';
                document.getElementById('success').append(thankyou);
                return true;
            }
        }