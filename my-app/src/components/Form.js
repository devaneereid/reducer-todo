import React, {useState} from 'react';

const Form = ({dispatch}) => {
    const [todo, setTodo] = useState('');
    const [date, setDate]
    
    const addTodo = e => {
        e.preventDefault();
        dispatch({
            type: 'ADD_TODO',
            payload: [todo, date]
        });
        setTodo('');
    };

    const handleChanges = e => {
        setTodo(e.target.value);
    };

    const handleDateChanges = e => {
        setDate(e.target.value);
    };

    return (
        <form onSubmit={addTodo}>
            <input 
                name='items'
                onChange={handleChanges}
                id={Date.now()}
                value={todo}
                />
            <input 
                name='date'
                type='text'
                value={date}
                onChange={handleDateChanges}
                />
            <button onClick={() => {
                dispatch({ type:'ADD_TODO',
                    payload: todo });
                dispatch({ type: 'TOGGLED'});}}>Update</button>
        </form>
    );
};

export default Form;