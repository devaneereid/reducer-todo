import React, {useReducer} from 'react';
import Form from '../components/Form';
import {reducer, items} from '../reducers/reducer';
import Toggle from '../components/Toggle';

const Todo = () => {
    const [state, dispatch] = useReducer(reducer, items);

    return (
        <div className='todo'>
            <Form dispatch={dispatch} />
            {state.map(item => {
                return <Toggle key={item.id}
                        items={item}
                        dispatch={dispatch} />
            })}
        </div>
    );
};
export default Todo;