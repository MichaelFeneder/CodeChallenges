// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
  
//   reader.question("Please enter a number from 1 - 10 ", function(input){
      //Math.floor(input);
      let input = 9
      if(input > 10 || input < 1){
          console.log("try again silly")
      } else{
  
  let arr = [];
  
  for(let i = 0; i < input; i++){
      let r = Math.floor(Math.random() * 11)
      //console.log(r);
      while(arr.includes(r) === true || r === 0 || r === 11){
      r = Math.floor(Math.random() * 11)
      } 
      arr.push(r)
  }
     console.log(arr);
  }
//   reader.close()
//   });