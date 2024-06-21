document.addEventListener('DOMContentLoaded',function(){
    const calculator=document.getElementById('calculator');
    const buttons=document.querySelectorAll('.button');
    let input='0';
    let operator=null;
    let firstOperand=null;
    buttons.forEach(button=>{
        button.addEventListener('click',function(){
            const value=this.getAttribute('data-value');
            if(value==='C'){
                input='0';
                operator=null;
                firstOperand=null;
            } else if(value==='='){
                if (operator && firstOperand !== null){
                    input=calculate(firstOperand,parseFloat(input),operator).toString();
                    operator=null;
                    firstOperand=null;
                }
            } else if (['+','-','*','/'].includes(value)){
                if (operator && firstOperand !== null){
                    input=calculate(firstOperand,parseFloat(input),operator).toString();
                }
                operator = value;
                firstOperand=parseFloat(input);
                input='0';
            } else {
                if(input==='0'){
                    input=value;
                } else {
                    input+=value;
                }
            }
            calculator.textContent=input;
        });
    });
function calculate(x,y,operator){
    switch(operator){
        case '+':return x+y;
        case '-':return x-y;
        case '*':return x*y;
        case '/':return x/y;
        default:return y;
    }
}
});