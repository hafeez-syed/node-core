console.log('Step: 1');
var start = Date.now();
var limit = 1000000000;
for(var i = 1; i<limit; i++) {
    // This will take sometime
}
var end = Date.now();
console.log('Step: 2');
console.log(end - start);