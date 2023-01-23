// NAME: OMAR USMAN
// TASK FOR: ENCIRCLE
// LANGUAGE USED: JAVASCRIPT 
// PLEASE CHECK readme.txt FOR MORE INFORMATION

const prompt = require("prompt-sync")();


  const add = (a , b) =>{   // Sum function to add two values
      return a+b;
    }
  
  const multiply = (a , b) =>{    // Multiply Function
    return a*b;
  }
  
  const main = () => {                 // Main or starting point of Program.. Includes Menu
  console.log('===== MAIN MENU =====');
  console.log('Press enter -1 to exit');
  console.log();
  let value = '';  // Get value from user
  do {
    value = prompt('Please Enter the Command ->');
    if(!isNaN(value)){
      if(value < 0) {
        console.log('Please Enter positive number or Proper Expression...')  // Error check for negative num
      }
      else {
      console.log('Result:', value);                 // Display normal number
      }                                   
    }
    else if(value.split('(').length-1 != value.split(')').length-1){        //ERROR CHECK
      console.log('Please Balance the Parenthesis or Check your Command')
    }
    else if(!value.includes('add') && !value.includes('multiply')){
      console.log('Please Enter Valid Command...');
    }
    else {
      const val = value.split(' ');                       //Check if root is multiply or sum
        if(val[0].includes('add')){
         businessLogic('add', val);
        }
        else if(val[0].includes('(multiply')){
          businessLogic('multiply', val);
        }}
  } while (value != '-1');
  }
  
  const businessLogic = (type, val) => {           // All business logic, includes conditions
        let text = '';
         text = text.concat(type);
         for (let i=1; i< val.length; i++){
           if(val[i] === '(add'){
               if(text.slice(-1) === ')'){
                 text = text.concat(',' + val[i].slice(1) + '(')
               }
               else{
                text= text.concat(val[i])
               }
           }
           else if(val[i] === '(multiply'){
             if(text.slice(-1) === ')'){
                 text = text.concat(',' + val[i].slice(1) + '(')
               }
              else{
                text= text.concat('(multiply');
              }
           }
           else if(!(val[i].includes('(')) && !(val[i].includes(')')) && !(val[i].includes('add') || val[i].includes('multiply'))){
               if(val[i-1].includes('multiply') || val[i-1].includes('add')){
               text = text.concat('(' + val[i] + ',');
               }
               else if(text.slice(-1) === '('){
                text = text.concat(val[i] + ',');
               }
           }
           else if(val[i].includes('(') || val[i].includes(')') && !(val[i].includes('add') || val[i].includes('multiply'))){
              if(text.slice(-1) === ','){
               text = text.concat(val[i]);
              }
              else if(text.slice(-1) === ')'){
                text = text.concat(',' + val[i]);
              }
           }
         }
         if(text.split('(').length-1 != text.split(')').length-1){
             text = text.concat(')');
           }
        if(!text){
          console.log('Ooops! something went wrong...')       //Error Check
        }
        else{
          console.log('Result',eval(text));             //Display Result
        }
  }

  main();   // Call of Main Function