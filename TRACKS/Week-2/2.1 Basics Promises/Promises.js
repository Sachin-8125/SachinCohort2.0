// //wrapping another async function
// function myOwnSetTimeout(fn, duration){
//     setTimeout(fn,duration);
// }
// myOwnSetTimeout(function(){
//     console.log("hi there");
// },1000);

//using promises
function myOwnSetTimeout(duration){
    let p = new Promise(function(resolve){
        setTimeout(resolve,1000);
    });
    return p;
}
myOwnSetTimeout(1000)
.then(function(){
    console.log("log the first thing");
});