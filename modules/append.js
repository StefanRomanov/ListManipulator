define([],function (){
    return function append(element,list,textField){
        if(element.length !== 1 ){
            throw new Error('Error: invalid command parameters')
        }
        let string = element.toString();
        list.push(string);
        textField.value += list.join(' ') + "\n";
    }
});


