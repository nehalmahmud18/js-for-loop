// sum of the numbers between 1 to 30 that are divisible by 3
let total = 0;
for(let i= 1; i<= 30; i++){
    if( i %3 === 0){
        console.log(i);
        total = total+ i;
    }
}
console.log('total number', total);