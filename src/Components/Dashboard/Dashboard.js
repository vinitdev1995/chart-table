import React from "react";
import Chart from "Components/Common/Chart";
import Table from "Components/Common/Table";
import './Dashboard.css'

const Dashboard = () =>{
    const [tableData, setTableData] = React.useState();
    const [chartData, setChartData] = React.useState();
    const getTableData = () =>{
        fetch('https://dummyjson.com/products?skip=20&limit=40')
            .then(res => res.json())
            .then(data => {
                console.log("data of Table",data)
                setTableData([...data.products]);
            })
        // fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json')
        // // fetch(' https://dummyjson.com/products?skip=20&limit=10')
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log("--------chart api in dashboard")
        //         setChartData(data);
        //     })
    }

    React.useEffect(()=>{
        getTableData();
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
                            // valueGetter: (params) =>
                            //     `${params.getValue(params.id, 'firstName') || ''} ${
                            //         params.getValue(params.id, 'lastName') || ''
                            //     }`,
                        },
                        {
                            field: 'thumbnail ',
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