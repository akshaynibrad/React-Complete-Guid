import './ExpenceItem.css'
import React, {useState} from 'react';
import ExpenceDate from './ExoenceDate';
import Card from '../UI/Card';

const ExpenceItem = (props) => {
    const [title, setTitle] = useState(props.title)
    const [amount, setAmount] = useState(props.amount)
    
    const clickHandler = () => {
        setTitle('hi');
        setAmount(20.25);
    };

    return (
        <Card className='expense-item'>
            <ExpenceDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenceItem;