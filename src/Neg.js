import React, { useState } from 'react';


function Neg(){
        const [data, setData] = useState([])
    const apiGet = () => {
        fetch("localhost:5000/get_positive_sentiments")
        .then((Response) => Response.json())
        .then((json) => {
            console.log(json);
            setData(json);
        });

    };


    return (
        <div className='body'>

            <br />
            <pre> {JSON.stringify(data, null,2)}</pre>
            <button onClick={apiGet}> Negative </button>

        </div>
    );

}

export default Neg;