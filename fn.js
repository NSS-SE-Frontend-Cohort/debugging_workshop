function rectangleArea(h,w){
    return h * w; 
}

const shapeArea = rectangleArea;

function calculateAndPrint(calculate,height,width){
    const res = calculate(height,width);
    console.log(`The result of the calulation is ${res}`);
}

calculateAndPrint(shapeArea, 2,4)

calculateAndPrint(rectangleArea, 6,5)


function multiplierFactory(multiplier){
    return function (value){
        return value * multiplier;
    }
}

const doubler = multiplierFactory(2);
const tripler = multiplierFactory(3);

const douleRes  = doubler(5);
console.log('douleRes',douleRes);

const tripleRes  = tripler(5);
console.log('tripleRes',tripleRes);


function dosomething(something){
    console.log('something + something',something + " "+something);
}
function dosomething(something){
    console.log('something + something',something + " "+something);
}

const res = dosomething("baz")

console.log('res',res);

