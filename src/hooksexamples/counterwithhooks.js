import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Counterwithhooks = () => {
    const [count, setCount] = useState(0);
        return(
            <div> 
                <p> Counter= {count} </p>
                <button onClick={() => setCount(count + 1) }> Increament </button> &nbsp;
                <button onClick={() => setCount(count - 1) }> Decrement </button>
            </div>
        );
}

ReactDOM.render(
	<Counterwithhooks />,
	document.getElementById('root')
);
