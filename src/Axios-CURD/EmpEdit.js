import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams, Link, useNavigate } from 'react-router-dom';

const EmpEdit = () => {
    const { empid } = useParams();
    const navigate = useNavigate();

    const [empInfo, setEmpInfo] = useState({
        id: '',
        name: '',
        email: '',
        phone: '',
    });

    useEffect(() => {
        axios.get(`http://localhost:3030/employees/${empid}`)
            .then((res) => {
                setEmpInfo(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [empid]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmpInfo(prevEmpInfo => ({
            ...prevEmpInfo,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3030/employees/${empid}`, empInfo);
            alert('Updated successfully!');
            navigate('/');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6 ">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card">
                            <div className="card-title">
                                <h1>Employee Edit</h1>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="id">ID</label>
                                            <input value={empInfo.id} className='form-control' readOnly />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input name="name" value={empInfo.name} className='form-control' onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input name="email" value={empInfo.email} className='form-control' onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone</label>
                                            <input name="phone" value={empInfo.phone} className='form-control' onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className='btn btn-success' type='submit'>SAVE</button>
                                            <Link to='/' className="btn btn-warning mx-lg-3">Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmpEdit;
