import React from 'react'
import Layout from '../../components/layout/layout'
import AdminMenu from './../../components/layout/AdminMenu';

const CreateProduct = () => {
    return (
        <Layout>
            <div div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu></AdminMenu> </div>
                    <div className="col-md-9">
                        <h1>  Create Product </h1>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default CreateProduct