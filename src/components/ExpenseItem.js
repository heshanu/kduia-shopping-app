import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Location} = useContext(AppContext);

    const handleDeleteItem = () => {
        alert('Delete Item');
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };

    // useState(() => {
    //     handleDeleteItem();
    // },[props]);

    return (
        <>
            {props.quantity > 0 ?
                <tr>
         <td>{props.name}</td>
         <td>{props.quantity}</td>
         <td>{Location}{parseInt(props.unitprice)}</td>
         <td>{Location}{parseInt(props.quantity)*parseInt(props.unitprice)}</td>
         <td><FaTimesCircle size='2.2em' color="red" onClick={handleDeleteItem}/></td>
         </tr> : null}
        {/* // <tr>
        // <td>{props.name}</td>
        // <td>{props.quantity}</td>
        // <td>{Location}{parseInt(props.unitprice)}</td>
        // <td>{Location}{parseInt(props.quantity)*parseInt(props.unitprice)}</td>
        // <td><FaTimesCircle size='2.2em' color="red" onClick={handleDeleteItem}/></td>
        // </tr> */}
        </>
    );
};

export default ExpenseItem;