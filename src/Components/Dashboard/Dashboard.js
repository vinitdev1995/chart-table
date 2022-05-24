import React from "react";
import Chart from "Components/Common/Chart";
import Table from "Components/Common/Table";
import {HttpsAction} from '../../Services/httpsAction.js';
import './Dashboard.css'

const Dashboard = () =>{
    const [tableData, setTableData] = React.useState();
    const [chartData, setChartData] = React.useState();
    const getTableData = async () =>{
        /** Get Table Data From API */
        await HttpsAction({
            url: 'https://dummyjson.com/products?skip=20&limit=40',
            positiveCallBack: ({data}) => {
                setTableData([...data.products]);
            }
        });

        // await HttpsAction({
        //     url: 'https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json',
        //     headers :{
        //         "Access-Control-Allow-Origin": "http://localhost:3000/"
        //     },
        //     positiveCallBack: ({data}) => {
        //         setChartData(data);
        //     }
        // });
        /** Get Chart Data From API */
        fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json')
            .then(res => res.json())
            .then(data => {
                setChartData(data);
            })
    }

    React.useEffect(()=>{
        (async ()=>await getTableData())();
    },[]);

    return(
        <div className='Dashboard'>
            <Chart chartData={chartData}/>
            <div style={{width:'100%'}}>
            <Table
                pageSize={10}
                rows={tableData}
                style={{width:'fit-content'}}
                columns = {
                    [
                        {
                            field: 'title',
                            headerName: 'Title',
                            width: 200
                        },
                        {
                            field: 'brand',
                            headerName: 'Brand',
                            width: 200,
                            editable: true,
                        },
                        {
                            field: 'price',
                            headerName: 'Price',
                            width: 200,
                            editable: true,
                        },
                        {
                            field: 'rating',
                            headerName: 'Rating',
                            type: 'number',
                            width: 200,
                            editable: true,
                        },
                        {
                            field: 'category',
                            headerName: 'Category',
                            // description: 'This column has a value getter and is not sortable.',
                            sortable: false,
                            width: 200,
                        },
                        {
                            field: 'thumbnail',
                            headerName: 'Thumbnail ',
                            width: 200,
                            editable: true,
                        },
                    ]
                }
            />
            </div>
        </div>
    )
}
export default Dashboard;