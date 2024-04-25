import {useEffect, useState} from 'react';
import {AgGridReact} from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('http://localhost:8080/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(err => console.error(err))
    }

    const [columnDefs] = useState([
        {field: 'title', sortable: true, filter: true},
        {field: 'type.name', headerName: 'Category', sortable: true, filter: true},
        {field: 'color', sortable: true, filter: true},
        {field: 'size.size', headerName: 'Size', sortable: true, filter: true},
        {field: 'price', sortable: true, filter: true},
        {field: 'manufacturer.name', headerName: 'Manufacturer', sortable: true, filter: true},
    ]);


    return (
        <>
            <div className="ag-theme-material" style={{width: 1280, height: 1000}}>
                <AgGridReact
                    rowData={products}
                    columnDefs={columnDefs}
                    pagination={true}
                    paginationPageSize={10}
                />
            </div>
        </>
    );
}
