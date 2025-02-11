const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.style.display = "block";
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});

const form2 = document.getElementById('form2');
const result2 = document.getElementById('result2');

form2.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form2);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result2.style.display = "block";
  result2.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result2.innerHTML = json.message;
            } else {
                console.log(response);
                result2.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result2.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form2.reset();
            setTimeout(() => {
                result2.style.display = "none";
            }, 3000);
        });
});