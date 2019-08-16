function solve(input) {

    let txt = input.shift()



   for (const line of input) {
       

    let tokens = line.split(' ')

    let command = tokens[0]
    let word = tokens[1]

    if(command === 'Sign'){
        console.log();
        
        break;
    }else
 if(command === 'Case'){
        if(word === 'lower'){
            txt = txt.toLowerCase()
        }else if(word === 'upper'){
            txt = txt.toUpperCase()
        }
        console.log(txt);
        
    }else if(command === 'Reverse'){
        let index1 = +word
        let index2 = +tokens[2]

        if(index1 != -1 && index2 != -1){
            let wordSubstring = txt.substring(index1,index2+1)
            let splitted = wordSubstring.split('')
            let reversed = splitted.reverse()
            console.log(reversed.join(''));

        }
        
        
    }else if(command === 'Cut'){
        
        if(txt.includes(word)){

            while(txt.includes(word)){
                let length = word.length
                let index = txt.indexOf(word)
                let splitted = txt.split('')
                splitted.splice(index,length)
                txt = splitted.join('')
            }
            
            console.log(txt);

        }else{
            console.log(`The word ${txt} doesn't contain ${word}.`);
            
        }
    }else if(command === 'Replace'){
        let mustReplace = word
        let splitted = txt.split('')
        for (let i = 0; i < splitted.length; i++) {
            if(mustReplace === splitted[i]){
                txt = txt.replace(mustReplace,'*')
            }
                  
        }
        console.log(txt);

    }else if(command === 'Check'){
        let mustContain = word
        if(txt.includes(mustContain)){
            console.log(`Valid`);
            
        }else{
            console.log(`Your username must contain ${mustContain}.`);
            
        }
    }
       
   }




}


solve([ 'ThisIsMyString',
'Reverse 1 4',
'Replace i',
'Cut My',
'Sign up' ])