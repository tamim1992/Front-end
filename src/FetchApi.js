import React, { useState } from 'react';
import MyChart from './MyChart.js';

function FetchApi(props) {
    var [x, setX] = useState([])
    var [y, setY] = useState([])

    const apiGet = () => {
        fetch("http://localhost:5000/" + props.sentiment_url)
            .then((Response) => Response.json())
            .then((json) => {
                // console.log('lol', json);
                setX([...json.map(e => e[0])])
                setY([...json.map(e => Math.floor(e[1]))])
            });

    };

    console.log('rerender ....', props.sentiment_type)
    return (
        <div className='body'>

            <br />
            <button onClick={apiGet}> {'Load ' + props.sentiment_type + ' sentiments'} </button>
            <MyChart
                x={x}
                y={y}
                z={Math.random()}
                sentiment_type={props.sentiment_type}
            />
        </div>
    );

}

export default FetchApi;