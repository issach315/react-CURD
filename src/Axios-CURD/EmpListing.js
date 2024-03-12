import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function EmpListing() {
    const [empData, setEmpData] = useState([]);
    const navigate = useNavigate();

    const editFunction = (id) => {
        navigate(`/employee/edit/${id}`)
    }
    const removeFunction = (id) => {
        if (window.confirm('Do you want to delete...!')) {
            axios.delete(`http://localhost:3030/employees/${id}`)
                .then((res) => {
                    alert('User Deleted Successfully');
                    setEmpData(empData.filter(emp => emp.id !== id)); // Remove the deleted employee from the state
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
        const detailsFunction = (id) => {
        navigate(`/employee/detail/${id}`)
    }


    useEffect(() => {
        axios.get("http://localhost:3030/employees")
            .then((res) => {
                setEmpData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className='container'>
            <div className="card">
                <div className="card-title">
                    <h2>Employee Listing</h2>
                </div>
                <div className="card-body">
                    <div>
                        <Link to='employee/create' className='btn btn-success'>Add New(+)</Link>
                    </div>
                    <table className='table table-bordered'>
                        <thead className='table-dark text-white'>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone No</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {empData && empData.map((emp) => (
                                <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.phone}</td>
                                    <td className='btn-group' style={{display:'flex',gap:'5px'}}>
                                        <a onClick={() => { editFunction(emp.id) }} className='btn btn-success '>EDIT</a>
                                        <a onClick={() => { removeFunction(emp.id) }} className='btn btn-danger '>DELETE</a>
                                        <a onClick={() => { detailsFunction(emp.id) }} className='btn btn-primary'>DETAILS</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default EmpListing;
