export class Init{
    load(){
        if(localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined){
            console.log('No todos found, Creating now...');
            let todos = [
                {
                    text: 'Work'
                },
                {
                    text: 'Study'
                },
                {
                    text: 'Code'
                }
            ];

            localStorage.setItem('todos', JSON.stringify(todos));
            return
        } else {
            console.log('Todos found...');
        }
    }
}