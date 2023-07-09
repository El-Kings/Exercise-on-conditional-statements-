var inputAge = prompt("Enter your age");
inputAge = parseInt(inputAge)
var myAge = 30;
if (inputAge > myAge) { 
  var ageDifference = inputAge - myAge;
  console.log ("you are older than me with " +ageDifference+ " year(s).");
}
else if (inputAge < myAge) {
  var ageDifference = myAge - inputAge;
  console.log ("you are younger than I am with " +ageDifference+ " year(s).");
}
else  {
  console.log ("we are of same age.")
}