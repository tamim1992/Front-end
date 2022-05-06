import Chart from 'react-apexcharts';
import { Component } from 'react';
import { ApexOptions } from 'apexcharts';

class MyChart extends Component {
    render() {
        const data = {
            options: {
                chart: {
                    id: 'apexchart-example'
                },
                xaxis: {
                    categories: [...this.props.x],
                    title: {
                        text: 'Time'
                    }
                },
                yaxis: {
                    title: {
                        text: 'Cumulative ' + this.props.sentiment_type + ' sentiment'
                    }
                },
                title: {
                    text: this.props.sentiment_type + ' sentiments over time.',
                    floating: true,
                    align: 'center',
                    style: {
                        color: '#444'
                    }
                }
            },
            series: [{
                name: 'series-1',
                data: [...this.props.y]
            }],

        };

        // if (this.props.x.length > 0) {
        return (
            <div>
                <Chart options={data.options} series={data.series} type="bar" width={1000} height={520} />
            </div>
        )
        // } else {
        //     return (<div>
        //         Click the button to load the data
        //     </div>);
        // }
    }
}

export default MyChart;