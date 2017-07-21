define([],function (){
    return function sort(tokens,list,textField){
        if(tokens.length > 0){
            throw new Error('Error: invalid command parameters')
        }

        list.sort();
        textField.value += list.join(' ')+'\n';
    }
});