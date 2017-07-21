define([],function () {
   return function(element,list,textField){
       if(element.length !== 1){
           throw new Error('“Error: invalid command parameters”')
       }
       let index = +element[0];
       if(index < 0 || index > list.length - 1){
           throw new Error(`Error: invalid index ${index}`)
       }
       list.splice(index,1);
       textField.value += list.join(' ') + "\n";
   }
});
