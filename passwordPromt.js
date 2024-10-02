let correctPassword = `tetoKasane`; 
let userInput = undefined; 

do {
    userInput = prompt(`Enter your password: `); 
    if (userInput != correctPassword) {
        console.log('Incorrect Password'); 
    }

} while (userInput != correctPassword); 

console.log('Access Granted.') 
