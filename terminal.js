define(['./modules/append','./modules/delete','./modules/prepend', './modules/reverse', './modules/end'],function(appendModule,deleteModule,prependModule,reverseModule,endModule){

    let functions = {
        append: appendModule,
        prepend: prependModule,
        delete: deleteModule,
        reverse: reverseModule,
        end: endModule
    };
    let textField = document.getElementById('textarea');
    let terminal = document.getElementById('terminal');

    let list = [];
    let initialized = false;

    document.getElementById('submit').addEventListener('click',submit);
    terminal.addEventListener('keypress', e => e.code === 'Enter' ? submit() : "");


    function submit(){
        let tokens = terminal.value.split(" ").filter(e => e !== "");
        if(initialized === false){
            list = tokens.slice(0);
            textField.value += list.join(" ")+ "\n";
            terminal.value = "";
            initialized = true;
            return
        }
        try {
            functions[tokens[0]](tokens.slice(1),list,textField);
        } catch (err){
            if(err.message === 'functions[tokens[0]] is not a function'){
                textField.value += 'Error: invalid command\n';
            } else {
                textField.value += err.message + "\n";
            }
        } finally {
            terminal.value = "";
        }
    }
});
