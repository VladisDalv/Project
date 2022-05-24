const root = document.getElementById('root');
const todoBlock = document.getElementById('todoBlock');


const headBlock = document.createElement('div');
const bodyHeadBlock = document.createTextNode('');
headBlock.append(bodyHeadBlock);
root.append(headBlock);

headBlock.className = 'headBlock';

const headButtomLeft = document.createElement('buttom');
const headButtomLeftText = document.createTextNode('Delete All');
headButtomLeft.append(headButtomLeftText);
headBlock.append(headButtomLeft);

headButtomLeft.dataset.type = 'headButtomLeft';
headButtomLeft.id = 'headButtomLeft';
headButtomLeft.className = 'buttom';

const headInput = document.createElement('input');
const headInputText = document.createTextNode('');
headInput.append(headInputText);
headBlock.append(headInput);

headInput.className = 'headInput';
headInput.type = 'text';

const headButtomRight = document.createElement('buttom');
const headButtomRightText = document.createTextNode('ADD');
headButtomRight.append(headButtomRightText);
headBlock.append(headButtomRight);

headButtomRight.className = 'buttom';

const todo = (date, text)=> {
    
    const todoBlock = document.createElement('div');
    const todoBlockText = document.createTextNode('');
    todoBlock.append(todoBlockText);
    root.append(todoBlock);
    
    todoBlock.dataset.type = 'todo'
    todoBlock.id = 'todoBlock';
    todoBlock.className = 'todoBlock';

    const todoButtomLeft = document.createElement('buttom');
    const todoButtomLeftText = document.createTextNode('✓');
    todoButtomLeft.append(todoButtomLeftText);
    todoBlock.append(todoButtomLeft);

    todoButtomLeft.dataset.type = 'check';
    todoButtomLeft.className = 'buttom';


    const todoTitle = document.createElement('h1');
    const todoTitleText = document.createTextNode(`${text}`);
    todoTitle.append(todoTitleText);
    todoBlock.append(todoTitle);

    todoTitle.id = 'todoTitleText'
    todoTitle.className = 'todoTitle';

    const todoBlockRight = document.createElement('div');
    const todoBlockRightText = document.createTextNode('');
    todoBlockRight.append(todoBlockRightText);
    todoBlock.append(todoBlockRight);

    todoBlockRight.className = 'todoBlock__block';

    const todoButtomRight = document.createElement('buttom');
    const todoButtomRightText = document.createTextNode('✖');
    todoButtomRight.append(todoButtomRightText);
    todoBlockRight.append(todoButtomRight);

    todoButtomRight.dataset.type = 'delete';

    todoButtomRight.id = 'todoButtomRight';
    todoButtomRight.className = 'buttom';

    const todoData= document.createElement('h1');
    const todoDataText = document.createTextNode(`${date}`);
    todoData.append(todoDataText);
    todoBlockRight.append(todoData);

    todoData.className = 'todoTitle';

    return todoBlock;
}
let now = new Date();
headButtomRight.addEventListener('click', function(){
    todo(now.toLocaleDateString(), headInput.value );
    headInput.value = "";
});

root.addEventListener('click', () =>{
    if (event.target.dataset.type === 'delete'){
        event.target.closest('.todoBlock').remove();
    }  else if ( event.target.dataset.type === 'headButtomLeft') {
        let elements = document.querySelectorAll('.todoBlock');
            elements.forEach(elem => {
                return elem.remove();
            });
    }  else if (event.target.dataset.type === 'check') {
        event.target.closest('.todoBlock').classList.toggle('color');
        event.target.closest('.todoTitle').classList.toggle('text');
    }
});

