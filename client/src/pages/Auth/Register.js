import React, { useState } from 'react'
import Layout from '../../components/layout/layout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
//import "../../css/login.css"

import "../../styles/Authstyles.css";

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [answer, setAnswer] = useState("")
    const navigate = useNavigate()
    //form function
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/api/V1/auth/register',
                { name, email, password, address, phone, answer }
            );
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate('/login');
            } else {
                toast.error(res.data.message);
            }

        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }

    }
    return (
        <Layout>
            <div className='register'>
                <h1 style={{ color: '' }}>Register</h1>
                <div className='hehe' style={{ width: "50%" }}>
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col-md-6">
                            <label htmlFor="exampleInputName" className="form-label">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-control"
                                id="exampleInputEmail1"
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="exampleInputName" className="form-label">Email</label>
                            <input
                                type="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                                id="exampleInputEmail2"
                                required
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control" id="exampleInputPassword1"
                                required
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="exampleInputName" className="form-label">Address</label>
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="form-control"
                                id="exampleInputEmail3"
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="exampleInputName" className="form-label">Phone Number</label>
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="form-control"
                                id="exampleInputEmail4"
                                required
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="exampleInputName" className="form-label">What is Your Pet Name?</label>
                            <input
                                type="text"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                className="form-control"
                                id="exampleInputEmail5"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">Submit</button>

                        </div>
                    </form>
                </div>


            </div>

        </Layout>
    )
}

export default Register