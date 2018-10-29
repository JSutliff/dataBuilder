const submitButton = document.getElementById('submitButton');
const companyName = document.getElementById('companyName');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(companyName.value)
})

