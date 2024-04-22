import { useState, useEffect } from 'react';
import { AgGridReact } from "ag-grid-react";
import { Button } from "@mui/material";
import { Snackbar } from "@mui/material";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [OpenSnackbar, setOpenSnackbar] = useState(false);
    const [msg, setMsg] = useState('');

    useEffect(() => fetchData(), []);
    const fetchData = () => {
        fetch('')
        .then(response => response.json())
        .then(data => setProducts(data._embedded.cars))
        .catch(err => console.error(err))
    }

    const deleteProduct = (params) => {
        if(window.confirm("Do you want to delete")){
            fetch(params.data._links.car.href, {method: "Delete"})
            .then(response => {
                if(response.ok) {
                    setMsg("Product deletion completed.")
                    setOpenSnackbar(true);
                    getCars();
                } else {
                    window.alert("Deletion failed.")
                    setOpenSnackbar(true);
                }
            })
            .catch(error =>  console.error(error))
        }
    }

    const saveProduct = (product) => {
        fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(product)
        })
        .then(response => fetchData())
        .catch(err => console.error(err))
    }
    const updateProduct = (product, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(response => fetchData())
        .catch(err => console.error(err))
    }
    const [columnDefs, setColumnDefs] = useState([
        {field: 'title', sortable: true, filter: true },
        {field: 'category', sortable: true, filter: true },
        {field: 'color', sortable: true, filter: true },
        {field: 'size', sortable: true, filter: true },
        {field: 'price', sortable: true, filter: true },
        {field: 'manufacturer', sortable: true, filter: true },
        {
            cellRenderer: (params) => <EditProduct product={params.data} updateProduct={updateProduct} />,
        }, {
            cellRenderer: (params) =>
            <Button size="small" color="error" onClick={() => deleteProduct(params)}>Delete</Button>
            , width: 120
        }
    ]);

    return (
        <>
            <AddProduct saveProduct={saveProduct} />
            <div className="ag-theme-material" style={{ width: 1280, height: 1000}}>
                <AgGridReact
                    rowData={products}
                    columnDefs={columnDefs}
                    pagination={true}
                    paginationPageSize={10}
                />
            </div>
            <Snackbar
                open={OpenSnackbar}
                autoHideDuration={3000}
                onClose={() => setOpenSnackbar(false)}
                message={msg}
            />
        </>
    );
}