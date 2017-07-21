define([],function () {
    return function(element,list, textField){
        if(element.length !== 1){
            throw new Error('Error: invalid command parameters');
        }
        let string = element[0];
        list.unshift(string);
        textField.value += list.join(' ') + "\n";
    }
});