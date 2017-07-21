define([],function (){
    return function reverse(tokens, list, textField){
        if(tokens.length > 1 ){
            throw new Error('Error: invalid command parameters');
        }

        list.reverse();
        textField.value += list.join(' ')+'\n';
    }
});
