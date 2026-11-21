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

        console.log(formData);
        alert("Form Submitted");
        console.log(formData);
            alert("Form Submited");
            const xhr = new XMLHttRequest();
            xhr.open("GET", "submit.json", true);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.onreadystatechange = function (){
                if (xhr.readyState === 4 && xhr.status === 200) {
                    //alert('form submitted successfully.');
                    message = document.getElementById('message');
                    const response = JSON.parse(xhr.responseText);
                    message.textContent = response.message;
                    form = document.getElementById('myForm');
                        form.reset();
                        //cleaar the message
                       // form.textContent ='';
                        
                    

                } else if (xhr.readyState ===4) {
                    alert('error submitting form.');
                }
            };
            xhr.send(JSON.stringfy(formData));
            alert('Success: ${firstName} ${lastName}');
            
