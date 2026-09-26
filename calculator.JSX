import { useState } from "react";

function calculator(){
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");

    const[result, setResult] = useState("");

    const calculate = (operator) => {
        const number1 = Number(num1);
        const number2 = Number(num2);


        if(num1 === "" || num2 === ""){
            setResult("please enter both numbers");
            return;
        }
        let answers;

        switch (operator){
            case "+":
                answer = number1 + number2;
                break;
            case "-":
                answer = number1 - number2;
                break;
            case "*":
                answer = number1 * number2;
                break;
            case "/":
                 if (number2 === 0){
                    setResult("cannot divide by zero");
                    return;
                 }
                 answer = number1 / number2;
                break;
            default:
                return;
        }
        setResult(answer);
    };
    const clearCalculator = () => {
        setNum1("");
        setNum2("");
        setResult("");
    };
    return (
    <div>
        <h1>React Calculator</h1>
        <input 
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="enter first number"/>


        <br />
        <br />

        <input 
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="enter second number"/>

         <br />
        <br />

        <button onClick={() => calculate("+")}>+</button>
        <button onClick={() => calculate("-")}>-</button>
        <button onClick={() => calculate("*")}>*</button>
        <button onClick={() => calculate("/")}>/</button>


        <br />
        <br />

        <h2>Result: {result}</h2>
        <button onClick={clearCalculator}>Clear</button>
    </div>
    );
}
export default calculator;