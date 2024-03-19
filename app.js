let inputBox=document.getElementById('inputBox')
let buttons=document.querySelectorAll('button')
let records=[];

let string = ''

buttons.forEach(elm =>{
    elm.addEventListener('click',(btn)=>{
        if(btn.target.innerText == '='){
            string = String(eval(string))
            inputBox.value = string;
            records.push(string);
        }
        else if(btn.target.innerText == 'C'){
            string = '';
            inputBox.value =string;
        }
        else if(btn.target.id == 'del'){
            string = string.substring(0, string.length-1);
            inputBox.value = string;
        }
        else if(btn.target.innerText == 'CE'){
            const lastOperatorIndex = string.match(/[-+*/]([^/*+-]*)$/).index;
            string = string.substring(0, lastOperatorIndex + 1);
            inputBox.value = string;
        }
        else if(btn.target.id =='plusMinus'){
            string= String(-eval(string))
            inputBox.value =string;
        }
        else if(btn.target.id =='but'){
            let result=history();
            inputBox.value=result;
            string=result;
        }
        else{
            string += btn.target.innerText
            inputBox.value = string
        }
    })
})

function history(){
    try{
        if(records==''){
            return 0;
        }
        else{
            return records.pop();
        }
    }
    catch(error){
        return 'ERROR';
    }
}