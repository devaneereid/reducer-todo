import React, {useState} from 'react';

const Form = ({dispatch}) => {
    const [todo, setTodo] = useState('');
    const [date, setDate] = useState('');
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

    const clearItems = e => {
        e.preventDefault();
        dispatch({
            type: 'CLEARED'
        });
    }

    return (
        <form onSubmit={addTodo}>
            <input 
                name='items'
                id={Date.now()}
                value={todo}
                onChange={handleChanges}
                />
            <input 
                name='date'
                type='text'
                value={date}
                onChange={handleDateChanges}
                />
            {/* <button onClick={() => {
                dispatch({ type:'ADD_TODO',
                    payload: todo });
                dispatch({ type: 'TOGGLED'});}}>Update</button> */}
                <button onClick={handleChanges}
                        type='submit'>Add To Do</button>
                <button onClick={clearItems}
                        type='submit'>Clear</button>
        </form>
    );
};

export default Form;