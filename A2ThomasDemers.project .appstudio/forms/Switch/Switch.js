let state = prompt('Are you in NE or FL?')

let userName = prompt("Type your first name") 


let messages = [ "Wear a warm coat, hat, scarf and gloves", "wear a warm coat but you won't need a hat, scarf or gloves", "wear your warmest coat, a warm hat, a scarf, and warm gloves" , "wear a warm coat, hat and gloves. Maybe a scarf too" ] 



let temp  = Number(prompt("Enter temperature in Fahrenheit in the state you are in "))

switch(true) {
  case (temp < 32 && state == 'NE'):
  console.log(`${name}, ${messages[0]}`)
  break
  
case (temp>=32 && temp < 50 && state == 'NE'):
  console.log(`${userName}, ${messages[1]}`)
  break

  case(temp>=32 && temp < 50 && state == 'FL'):
  console.log(`${userName}, ${messages[2]}`)   
  break
  
  case(temp>=50 && temp < 70 && state == 'FL'):
  console.log(`${userName}, ${messages[3]}`)
  break
default: 
console.log("Choose a different state.")
}
