import React from 'react';

const Toggle = ({items, dispatch}) => {
    const toggleItem = () => {
        dispatch({
            type: 'TOGGLED',
            payload: items.id
        });
    };

    return (
        <div className={`items${items.completed ? 'completed': ''}`}
            onClick={toggleItem}
            style={{textDecoration: items.completed ? 'line-through' : ''}}>
                <h2>To Do: {items.item}</h2>
                {/* <h2>Date: {items.date}</h2> */}
        </div>
    );
};
export default Toggle;