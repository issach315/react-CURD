import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams, Link } from 'react-router-dom'

const EmpDetail = () => {
    const { empid } = useParams();
    // console.log(empid);
    const [empData, setEmpData] = useState({});


    useEffect(() => {
        axios.get(`http://localhost:3030/employees/${empid}`)
            .then((res) => {

                setEmpData(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className='card'>
            <div className="card-title">
                <h2>Employee create</h2>
            </div>
            <div className="card-body">
                {
                    empData &&
                    <div>
                        <table class="table table-bordered" >
                            <thead className='table-dark text-white '>
                                <tr >
                                    <th scope="col">Emp Id</th>
                                    <th scope="col">Emp Name</th>
                                    <th scope="col">Emp Email</th>
                                    <th scope="col">Emp Phone</th>
                                    <th scope="col">#</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='table-info '>{empData.id}</td>
                                    <td className='table-info '>{empData.name}</td>
                                    <td className='table-info '>{empData.email}</td>
                                    <td className='table-info '>{empData.phone}</td>
                                    <td className='table-info '><Link to='/' className='btn btn-success  ' >Back To List </Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                }
            </div>

        </div>
    )
}

export default EmpDetail