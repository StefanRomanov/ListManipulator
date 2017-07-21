define([],function () {
    return function insert (index,list,textField){

        let word = index[1];
        if(index[0] < 0 || index[0] > list.length - 1){
            throw new Error(`Error: invalid index ${index[0]}`);

        }if (index[0] >= 0 || index[0] < list.length && !isNaN(index[1])){
            list.splice(index[0], 0, word);
        }if(index.length !== 2){
            throw new Error('Error: invalid command parameters')
        }

        textField.value += list.join(' ') + "\n";
    }
});
