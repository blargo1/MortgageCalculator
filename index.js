
/*Write the following JavaScript in your index.js file
Create a function that will be called when the user clicks on the button element you added to your HTML.
This function should grab the values entered by the user from the input elements and the select element and then calculate the monthly payment.
We can break this formula into 5 local variable 'buckets' for read-ability:
5 Local Variables*/

$(function() {

$('button').click(function() {

var loanBalance = $('#loanBalance').val();
var interestRate = $('#interestRate').val();
var loanTerm = $('#loanTerm').val();
var period = $('select option:selected').val();

 	// monthly interest rate       
  monthlyInterestRate = (interestRate / 100) / period;          

    // number of payments
  numberOfPayments = loanTerm * period;

    // compounded interest rate
  compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments); 

    // interest quotient
  interestQuotient  = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);

    // final calculation
  monthlyPayment = loanBalance * interestQuotient;

$("#userOutput").html("Your monthly payment would be $" +monthlyPayment);

});
});