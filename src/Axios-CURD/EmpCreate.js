import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const EmpCreate = () => {
    const [empInfo, setEmpInfo] = useState({
        id: '',
        name: '',
        email: '',
        phone: '',
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3030/employees", empInfo);
            alert('Saved successfully!');
            navigate('/');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmpInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6 ">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card">
                            <div className="card-title">
                                <h1>Employee Create</h1>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="id">ID</label>
                                            <input name="id" value={empInfo.id} className='form-control' onChange={handleChange} />
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
                                            <button className='btn btn-success ' type='submit'>SAVE</button>
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

export default EmpCreate;
