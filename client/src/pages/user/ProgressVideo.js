import React from 'react'
import Layout from '../../components/layout/layout'
import UserMenu from '../../components/layout/UserMenu'

const ProgressVideo = () => {
    return (
        <Layout>
            <div className="container-fluid p-3 m-3" >
                <div className="row"></div>
                <div className="col-md-3">
                    <UserMenu></UserMenu>
                </div>
                <div className="col-md-9">
                    <h1>Progress Video</h1>
                </div>

            </div>

        </Layout>
    )
}

export default ProgressVideo