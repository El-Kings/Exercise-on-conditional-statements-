let userAge = prompt('Enter your age')
 let yearsToWait = 18 - userAge
switch (true) {
  case userAge > 18:
  console.log ('you are old enough to drive')
  break
  case userAge == 18:
    console.log ('you are of age now to drive')
   break
    case userAge < 18:
      console.log ("you need to wait for "   +yearsToWait+ "year(s) to turn 18 and be eligible to drive")
      break
      default: 
      console.log ('invalid input')
}