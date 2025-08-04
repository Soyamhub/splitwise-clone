function calculate(op) {
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let res = '';
    if(isNaN(n1) || isNaN(n2)) {
        res = "Enter both numbers!";
    } else {
        switch(op) {
            case '+': res = n1 + n2; break;
            case '-': res = n1 - n2; break;
            case '*': res = n1 * n2; break;
            case '/': 
                res = n2 === 0 ? "Can't divide by 0!" : (n1 / n2);
                break;
        }
    }
    document.getElementById('result').textContent = `Result: ${res}`;
}
