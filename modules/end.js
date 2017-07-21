define([],function (){
    return function end(terminal, list, textField){
        textField.value+='Finished\n';
        document.getElementById('terminal').disabled = true;
        document.getElementById('submit').disabled = true;
    }
});
