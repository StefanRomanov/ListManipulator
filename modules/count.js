define([],function (){
    return function count(tokens,list,textField){
        let counter = 0;
        list.forEach(function (element) {
            if(element == tokens){
                counter++;
            }
        });
        textField.value += counter +'\n';
    }
});