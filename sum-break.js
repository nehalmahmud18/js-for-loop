let n= 1;
let sum = 0;
for(n = 1; n>0 ; n++){
    sum = sum+n;
    console.log(n)
    if(sum>100){
        break;
    }
}
console.log('sum of numbers',sum)