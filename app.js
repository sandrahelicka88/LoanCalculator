//event listener for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
  //hide results
  document.getElementById('results').style.display = 'none';
  //show loader gif
  document.getElementById('loader-gif').style.display='block';
  setTimeout(calculatePayment,2000);



  e.preventDefault();
});
// function calculatePayment
function calculatePayment(){
//UI Vars

const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');

const principal = parseFloat(amount.value);
const calculatedInterest = parseFloat(interest.value)/100/12;
const calculatedPayments = parseFloat(years.value)*12;

//calculate monthly payment 
const x = Math.pow(1 + calculatedInterest, calculatedPayments);
const monthly = (principal*x*calculatedInterest)/(x-1);

if(isFinite(monthly)){
  monthlyPayment.value = monthly.toFixed(2);
  totalPayment.value = (monthly * calculatedPayments).toFixed(2);
  totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
  document.getElementById('results').style.display = 'block';
  document.getElementById('loader-gif').style.display='none';
}else{
  showError('Please check your input');
}

}

//create function showError
function showError(error){
  //hide result
  document.getElementById('results').style.display = 'none';
  //hide gif
  document.getElementById('loader-gif').style.display='none';
  //create div element
  const divError = document.createElement('div');
  //add class name for div element
  divError.className = 'alert alert-danger';
  divError.appendChild(document.createTextNode(error));
  //get element
  const card = document.querySelector('.card');
  const heading = document.querySelector('.card-header')
  //insert error above heading
  card.insertBefore(divError,heading);
  //clear error after 3 second
  setTimeout(clearError,3000);

}

//create function clearError
function clearError(){
  document.querySelector('.alert').remove();

}









