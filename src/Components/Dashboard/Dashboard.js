import React from "react";
import Chart from "Components/Common/Chart";
import Table from "Components/Common/Table";
import {HttpsAction} from '../../Services/httpsAction.js';
import './Dashboard.css'

const Dashboard = () =>{
    const [tableData, setTableData] = React.useState();
    const [reArrangedchartData, setReArrangedChartData] = React.useState();
    const getTableData = async () =>{

        /** Get Chart Data From API */
        /** Get Table Data From API */
        const data = await HttpsAction({
            url: 'https://dummyjson.com/products?skip=0&limit=5400',
            positiveCallBack: ({data}) => {
                setTableData([...data.products]);
                return data.products
            }
        });


        /** Re-factor Data for chart */
        let tempArray = data.map((item)=>{
            let obj = {...item};
            if( item.price >= 0 && item.price <= 499)  obj['range'] = '0-499';
            if( item.price >= 500 && item.price <= 999)  obj['range'] = '500-999';
            if( item.price >= 1000 && item.price <= 1499)  obj['range'] = '1000-1499';
            if( item.price >= 1500 && item.price <= 2000)  obj['range'] = '1500-2000';
            return obj;
        })
        setReArrangedChartData(tempArray);
    }


    React.useEffect(()=>{
        (async ()=>await getTableData())();
    },[]);


    return(
        <div className='Dashboard'>
            <Chart chartData={reArrangedchartData}/>
            <div style={{width:'100%'}}>
            <Table
                height={600}
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
                            sortable: false,
                            width: 200,
                        },
                        {
                            field: 'thumbnail',
                            headerName: 'Thumbnail ',
                            width: 200,
                            editable: true,
                            renderCell: (params) => <img src={params.value} height={100} style={{marginTop:'0.7rem', marginBottom: '0.7rem'}}/>,
                        },
                    ]
                }
            />
            </div>
        </div>
    )
}
export default Dashboard;