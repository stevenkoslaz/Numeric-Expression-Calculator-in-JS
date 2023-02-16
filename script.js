const keys = document.querySelectorAll('.key');
const input_display = document.querySelector('.display .input');
const output_display = document.querySelector('.display .output');
const precisionSelections = document.querySelectorAll('.selections .sel');
let input = " ";

for (let key of keys) {
    const value = key.dataset.key 

    key.addEventListener('click', () => {
        if(value == "clear") {
            input = "";
            input_display.innerHTML = "";
            output_display.innerHTML = "";
        }
        else if (value == "delete") {
            input = input.slice(0, -1);
            input_display.innerHTML = input;
        }
        else if (value == "=") {
            let result = eval(input); 

            output_display.innerHTML = result.toFixed(1);
        }
        else if (value == "brackets") {
            if(input.indexOf("(") == -1 ||   
            input.indexOf("(") != -1 && 
            input.indexOf(")") != -1 
            && input.lastIndexOf("(") < input.lastIndexOf(")")) {
                input += "("; 
            }
            else if(input.indexOf("(") !== -1 && 
            input.indexOf(")") == -1 ||
            input.indexOf("(") != -1 &&
            input.indexOf(")") != -1 &&
            input.lastIndexOf("(") > input.lastIndexOf(")" ) ) {
                input += ")"; 
            }
            input_display.innerHTML = input;
        }
        else  {
            input +=value;
            input_display.innerHTML = input;
        }
    })
}