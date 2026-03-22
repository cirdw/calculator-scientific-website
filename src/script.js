 document.addEventListener("DOMContentLoaded", function() {
            console.log("Hello Adverty");
            const display = document.getElementById("calc-display");
            const buttons = document.getElementsByClassName("btn");
            
            let currentVal = "";

            function evaluateResult(){
                const convertedVal = currentVal.replace("X", "*").replace("%", "*0.01");
                const result = eval(convertedVal);
                display.value = result;
            }
            for(let i=0; i< buttons.length; i++){
                const button = buttons[i];
                button.addEventListener('click', function(){
                    const value = button.innerText;
                    
                    if(value == "AC"){
                        currentVal = "";
                        display.value = currentVal;
                    }
                    else if(value == "="){
                        evaluateResult();
                    }
                    else {
                        currentVal += value;
                        display.value = currentVal;
                    }
                    
                });
            }
        });