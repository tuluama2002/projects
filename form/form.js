 document.getElementById('signup-form').addEventListener('submit', function(event){
        event.preventDefault();
        

        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const bdate = document.getElementById('bdate').value;
        const password = document.getElementById('password').value;
        const age = document.getElementById('age').value;
        
        if (!fullname || !email) {
            alert("you need a  name and email.");
            return;

        }

        if (!age || age<16){
            alert("you need to be 17");
            return;
        }

        const formData = {
            name: fullname,
            email: email,
            password: password,
            age: age
        });