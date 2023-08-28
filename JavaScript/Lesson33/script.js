console.log ('hello world!');

//part 1
class PoweredArray extends Array {
    pow(n) {
      return new PoweredArray(...this.map(element => element ** n));
    }
}
  
const myArray = [1, 2, 3];
const poweredArray = new PoweredArray(...myArray);
const squaredArray = poweredArray.pow(2);
console.log(squaredArray);  

//part2
function defer(fn, delay) {
    return function() {
        setTimeout(() => {
        fn.apply(this, arguments);
        }, delay);
    };
}

function a() {
    alert("test");
}

const deferredFunction = defer(a, 1000);
deferredFunction(); 