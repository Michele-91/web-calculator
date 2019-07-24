

let num = [];
let expression = [];
let el = document.createElement('p');
let display = document.querySelector(".screen__display");



document.body.addEventListener("click", function(e) {
    let clicked = e.target.classList[1];
    switch(clicked) {
        case "btn-ce":
            reset();
            break;
        case "btn-modulo":
        case "text-modulo":
            sign("%");
            signDisplay(e.target.textContent);
            break;
        case "btn-division":
            sign(e.target.textContent);
            signDisplay(e.target.textContent);
            break;
        case "btn-seven":
            num.push(e.target.textContent);
            numDisplay(e.target.textContent);
            break;
        case "btn-eight":
            num.push(e.target.textContent);
            numDisplay(e.target.textContent);
            break;
        case "btn-nine":
            num.push(e.target.textContent);
            numDisplay(e.target.textContent);
            break;
        case "btn-multiplication":
            sign("*");
            signDisplay(e.target.textContent);
            break;
        case "btn-four":
            num.push(e.target.textContent);
            numDisplay(e.target.textContent);
            break;
        case "btn-five":
            num.push(e.target.textContent);
            numDisplay(e.target.textContent);
            break; 
        case "btn-six":
            num.push(e.target.textContent);
            numDisplay(e.target.textContent);
            break;
        case "btn-minus":
            sign(e.target.textContent);
            signDisplay(e.target.textContent);
            break;
        case "btn-one":
            num.push(e.target.textContent);
            numDisplay(e.target.textContent);
            break;
        case "btn-two":
            num.push(e.target.textContent);
            numDisplay(e.target.textContent);
            break;
        case "btn-three":
            num.push(e.target.textContent);
            numDisplay(e.target.textContent);
            break;
        case "btn-plus":
            sign(e.target.textContent);
            signDisplay(e.target.textContent);
            break;
        case "btn-zero":
            num.push(e.target.textContent);
            numDisplay(e.target.textContent);
            break;
        case "btn-dot":
            num.push(e.target.textContent);
            numDisplay(e.target.textContent);
            break;
        case "btn-equal":
            sign(e.target.textContent);
            let result = calculateResult(expression);
            signDisplay(e.target.textContent, result);
            break;
        default: 
            console.dir("area clicked wasn't setup");
            break;
    }
});

function numDisplay(content) {
    display.textContent = num.join('');
}

function signDisplay(content, result) {
    if (content === "=") {
        display.textContent = result;
    }
}

function reset() {
    num = [];
    expression = [];
    display.textContent = 0;
}

const sign = function(sign) {
    insertOperands(num.join(''), sign);
    num.length = 0;
};

const insertOperands = function(operand, sign) {
    expression.push(operand);
    expression.push(sign);
    console.log(expression);
};

const calculateResult = function(expression) {
    let finalEx = ``;
    for(let val of expression) {
        if(val !== "=") {
            finalEx += `${val}`;
        }
    }
    let result = eval(finalEx);
    console.log(result);
    return result;
};






// let result = finalEx.match(/\d+|\+\d+|\-\d+/g)
//     .reduce(function (a, b) {
//             return Number(a) + Number(b);
//     });

// btn-percentage
// btn-division
// btn-seven
// btn-eight
// btn-nine
// btn-multiplication
// btn-four
// btn-five
// btn-six
// btn-minus
// btn-one
// btn-two
// btn-three
// btn-plus
// btn-zero
// btn-dot
// btn-equal
// btn-ce