 document.getElementById('signup-form').addEventListener('submit', function(event){
        event.preventDefault();
        

        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const bdate = document.getElementById('bdate').value;
        const password = document.getElementById('password').value;
        const age = document.getElementById('age').value;
        
        if (!fullname || !email || !bdate) {
            alert("you need a  name, email and birth date.");
            return;

        }

        if (!age || age<16 ||NavigationDestination(age) || age < 17){
            alert("you need to be 17");
            return;
        }

        const formData = {
            name: fullname,
            email: email,
            password: password,
            age: age,
            bdate: bdate
        };

        
        console.log(formData);
            const xhr = new XMLHttRequest();
            xhr.open("GET", "submit.json", true);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.onreadystatechange = function (){
                if (xhr.readyState === 4 && xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    const message = document.getElementById('message');
                    message.textContent = response.message;
                    document.getElementById('myForm').reset();
                        
                    

                } else if (xhr.readyState ===4) {
                    alert('error submitting form.');
                }
            };
            xhr.send(JSON.stringfy(formData));
            document.getElementById('success-message').textContent='Success! Right On ${fullname}, you are signed up!';
            
 });
