//Verifique se o número é primo 

let num = 41; //número primo
let divisoes = 0;

for(let i = 1; i <= num; i++ ){

  //numero primo
  //4 - 1, 2, 4
  //5 - 1, 5 
  if(num % i == 0){
    divisoes++;
  }
}

if (divisoes == 2) {
  console.log(`O número ${num} é primo`);
} else {
  console.log(`O número ${num} não é primo`);
}