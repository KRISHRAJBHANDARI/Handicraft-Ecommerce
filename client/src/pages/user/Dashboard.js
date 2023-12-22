import React from 'react'
import Layout from '../../components/layout/layout'
import UserMenu from '../../components/layout/UserMenu';
import { useAuth } from '../../context/auth';

const Dashboard = () => {
    const [auth] = useAuth();
    return (
        <Layout>
            <div className="container-fluid p-3 m-3" >
                <div className="row"></div>
                <div className="col-md-3">
                    <UserMenu></UserMenu>
                </div>
                <div className="col-md-9">
                    <div className="card w-75 p-3">
                        <h3>User Name:{auth?.user?.name}</h3>
                        <h3>User Email:{auth?.user?.email}</h3>
                        <h3>User Address:{auth?.user?.address}</h3>
                    </div>

                </div>

            </div>

        </Layout>

    )
}

export default Dashboard;