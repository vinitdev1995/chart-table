import React from "react";
import { Chart } from '@antv/g2';


const Charts = ({chartData}) =>{
    // const [chartData, setChartData] = React.useState();
    const [chartValue, setChartValue] = React.useState();
    const getChart = () =>{
        fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json')
        // fetch(' https://dummyjson.com/products?skip=20&limit=10')
            .then(res => res.json())
            .then(data => {
                console.log("data------------>",data)
                data.forEach(obj => {
                    obj.type = '1';
                });
                // setChartData(data);
                const chart = new Chart({
                    container: 'chart-container',
                    autoFit: true,
                    height: 15000,
                    padding: [40, 100, 80, 80]
                });

                chart.data(data);
                chart.scale('type', {
                    range: [0, 1]
                });
                chart.coordinate('polar');
                chart.legend(false);
                chart.axis('clarity', {
                    grid: {
                        alignTick: false,
                        line: {
                            style: {
                                lineDash: [0, 0]
                            },
                        },
                    },
                });
                chart
                    .point()
                    .adjust('jitter')
                    .position('clarity*type')
                    .color('clarity')
                    .shape('circle')
                    .style({
                        fillOpacity: 0.85,
                    })
                // setChartValue(chart);

                chart.render();
            });
    }

    // const renderChart = () =>{
    //     if(chartData) {
    //         const chart = new Chart({
    //             container: 'chart-container',
    //             autoFit: true,
    //             height: 15000,
    //             padding: [40, 100, 80, 80]
    //         });
    //
    //         chart.data(chartData);
    //         chart.scale('type', {
    //             range: [0, 1]
    //         });
    //         chart.coordinate('polar');
    //         chart.legend(false);
    //         chart.axis('clarity', {
    //             grid: {
    //                 alignTick: false,
    //                 line: {
    //                     style: {
    //                         lineDash: [0, 0]
    //                     },
    //                 },
    //             },
    //         });
    //         chart
    //             .point()
    //             .adjust('jitter')
    //             .position('clarity*type')
    //             .color('clarity')
    //             .shape('circle')
    //             .style({
    //                 fillOpacity: 0.85,
    //             })
    //         setChartValue(chart);
    //         // return chart.render();
    //     }
    //     return '';
    // }
    React.useEffect(()=>{
        getChart();
        // renderChart();
    },[]);


    return(
        <div>
             <div  id='chart-container' style={{height: '500px'}}>
             Chart
             </div>
            {/*{chartValue && chartValue.render()}*/}
        </div>

    )
}
export default Charts;