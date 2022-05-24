import React from "react";
import { DataGrid } from '@material-ui/data-grid';


const Table = ({columns,pageSize,...rest})=> {

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                AutoGenerateColumns="False"
                rows={rest.rows || []}
                columns={columns}
                pageSize={pageSize || 10}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}
export default Table;