import {useEffect, useState} from 'react';
import {AgGridReact} from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import {Snackbar} from "@mui/material";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [snackbar, setSnackbar] = useState({open: false, msg: ""});


    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        // TODO: VAIHDA URL RAHDIN URLIIN!!! -- DONE
        try {
            const response = await fetch('http://k24tiimi3backend-tiimi3.rahtiapp.fi/api/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            setSnackbar({open: true, msg: "Fetch failed!"});
        }
    };

    const [columnDefs] = useState([
        {field: 'title', sortable: true, filter: true},
        {field: 'type.name', headerName: 'Category', sortable: true, filter: true},
        {field: 'color', sortable: true, filter: true},
        {field: 'size.name', headerName: 'Size', sortable: true, filter: true, width: 100},
        {field: 'price', sortable: true, filter: true},
        {field: 'quantity', sortable: true, filter: true, width: 120},
        {field: 'manufacturer.name', headerName: 'Manufacturer', sortable: true, filter: true},
    ]);


    return (
        <div className="ag-theme-material" style={{width: 1280, height: 1000}}>
            <AgGridReact
                rowData={products}
                columnDefs={columnDefs}
                pagination={true}
                paginationPageSize={10}
            />
            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={() => setSnackbar({open: false, msg: ""})}
                message={snackbar.msg}
            />
        </div>
    );
}
