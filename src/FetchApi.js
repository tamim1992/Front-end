import React, { useState } from 'react';


function FetchApi(){
        const [data, setData] = useState([])
    const apiGet = () => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
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
            <button onClick={apiGet}> TimeLine </button>

        </div>
    );

}

export default FetchApi;