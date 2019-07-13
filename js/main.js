

let num = [];
let expression = [];

document.body.addEventListener("click", function(e) {
    let clicked = e.target.classList[1];
    switch(clicked) {
        case "btn-ce":
            break;
        case "btn-percentage":
            sign(e.target.textContent);
            break;
        case "btn-division":
            sign(e.target.textContent);
            break;
        case "btn-seven":
            num.push(e.target.textContent);
            break;
        case "btn-eight":
            num.push(e.target.textContent);
            break;
        case "btn-nine":
            num.push(e.target.textContent);
            break;
        case "btn-multiplication":
            sign(e.target.textContent);
            break;
        case "btn-four":
            num.push(e.target.textContent);
            break;
        case "btn-five":
            num.push(e.target.textContent);
            break; 
        case "btn-six":
            num.push(e.target.textContent);
            break;
        case "btn-minus":
            sign(e.target.textContent);
            break;
        case "btn-one":
            num.push(e.target.textContent);
            break;
        case "btn-two":
            num.push(e.target.textContent);
            break;
        case "btn-three":
            num.push(e.target.textContent);
            break;
        case "btn-plus":
            sign(e.target.textContent);
            break;
        case "btn-zero":
            num.push(e.target.textContent);
            break;
        case "btn-dot":
            num.push(e.target.textContent);
            break;
        case "btn-equal":
            sign(e.target.textContent);
            calculateResult(expression);
            break;
        default: 
            console.dir("area clicked wasn't setup");
            break;
    }
});

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
        finalEx += `${val}`;
    }
    let result = finalEx.match(/\d+|\+\d+|\-\d+/g)
        .reduce(function (a, b) {
            return Number(a) + Number(b)
        });
    console.log(result);
    // document.querySelector(".screen").innerHTML = number;
};



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