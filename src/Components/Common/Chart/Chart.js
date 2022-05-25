import React from "react";
import { Chart } from '@antv/g2';


const Charts = ({chartData}) =>{

    const renderChart = () =>{

        if(chartData) {
            document.getElementById("chart-container").innerHTML = ``;
            chartData.forEach(obj => {
                obj.type = '1';
            });
            const chart = new Chart({
                container: 'chart-container',
                autoFit: true,
                height: 15000,
                padding: [40, 100, 80, 80]
            });

            chart.data(chartData);
            chart.scale('type', {
                range: [0, 1]
            });
            chart.coordinate('polar');
            chart.legend(false);
            chart.axis('range', {
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
                .position('range*1')
                .color('range')
                .shape('circle')
                .style({
                    fillOpacity: 0.85,
                })
            chart.render();
        }
        return '';
    }

    React.useEffect(()=>{
        renderChart();
    },[chartData]);


    return(
        <div>
             <div  id='chart-container' style={{height: '500px'}}/>
        </div>
    )
}

export default Charts;