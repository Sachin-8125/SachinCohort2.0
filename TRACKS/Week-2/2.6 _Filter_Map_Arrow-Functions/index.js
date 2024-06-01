const input = [1,2,3,4,5];

//array function
// const newArray = [];
// for(let i=0; i<input.length;i++){
//     newArray.push(input[i]*2);
// }
// console.log(newArray);

//mapping
// function transform(i){
//     return i*2;
// }
// const ans = input.map(transform);
// console.log(ans);

//filter
const ans = arr.filter(function(n){
    if(n%2==0){
        return true;
    }else{
        return false;
    }
});
console.log(ans);