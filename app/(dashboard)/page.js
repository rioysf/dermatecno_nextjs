/*
    Import Node Module Libraries
*/
import { Fragment } from "react";
import { Container, Col, Row } from 'react-bootstrap';

export const metadata = {
    title: 'Dermatecno Apps - Dashboard',
    description: 'SaaS system that designed especially for you - Aesthetic Clinic',
}

const Home = () => {
    return (
        <Fragment>
            <div className="bg-primary pt-10 pb-21"></div>
            <Container fluid className="mt-n22 px-6">
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        {/* Page header */}
                        <div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="mb-2 mb-lg-0">
                                    <h3 className="mb-0  text-white">Dashboard BI</h3>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} md={12} xs={12}>
                        <div style={{ 'height': '100%' }}>
                            {/* <iframe src="https://demo.iziapp.id/izi/dashboard/32/page?access_token=v0nbg6nurbwsu2hig3trlq1q9tdpnzd1" className="mt-8" frameBorder="0" allowFullScreen/>  */}
                        </div> 
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
export default Home;
