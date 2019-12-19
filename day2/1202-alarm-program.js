const input =[1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,6,1,19,1,5,19,23,2,6,23,27,1,27,5,31,2,9,31,35,1,5,35,39,2,6,39,43,2,6,43,47,1,5,47,51,2,9,51,55,1,5,55,59,1,10,59,63,1,63,6,67,1,9,67,71,1,71,6,75,1,75,13,79,2,79,13,83,2,9,83,87,1,87,5,91,1,9,91,95,2,10,95,99,1,5,99,103,1,103,9,107,1,13,107,111,2,111,10,115,1,115,5,119,2,13,119,123,1,9,123,127,1,5,127,131,2,131,6,135,1,135,5,139,1,139,6,143,1,143,6,147,1,2,147,151,1,151,5,0,99,2,14,0,0]

/**
 * 
 * PART 1 
 */

// const input = [1,1,1,4,99,5,6,0,99]
const alarm = (signal, noun = 12, verb = 2) =>{
    let code = [...signal];
    code[1]=noun;
    code[2]=verb;
    
    for (let i = 0; i <= code.length; i++) {
        if(code[i] === 1){
            let x = code[code[i+1]] + code[code[i+2]];
            code[code[i+3]]=x;
            code[i] +=4;
            i+=3
        }else if(code[i] === 2){
            let x = code[code[i+1]] * code[code[i+2]];
            code[code[i+3]]=x;
            code[i] +=4;
            i+=3;
        }else if(code[i] === 99){
            i = code.length;
        }
    }
    return code[0];
}


/**
 * PART 2
 */
const code = () =>{
    for(let noun = 0; noun < 100; noun++){
        for(let verb = 0; verb < 100; verb++){          
            if(alarm(input,noun,verb) === 19690720) {
                return 100 * noun + verb;
            }
        }
    }
}

alarm(input)
code()