/*
    Import React & Next
*/
import React, { Fragment } from 'react'
import { Container, Col, Row } from 'react-bootstrap';

/*
    Import Feature
*/
import { FeaturePoli } from 'features'


export const metadata = {
    title: 'Dermatecno Apps - Poli Klinik',
    description: 'SaaS system that designed especially for you - Aesthetic Clinic',
}

export default function Poli() {
    return (<Fragment>
        <div className="bg-primary pt-10 pb-21"></div>
        <Container fluid className="mt-n22 px-6">
            <Row>
                <Col lg={12} md={12} xs={12}>
                    {/* Page header */}
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="mb-2 mb-lg-0">
                                <h3 className="mb-0  text-white">Poli</h3>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={12} md={12} xs={12}>
                    <FeaturePoli />
                </Col>
            </Row>
        </Container>
    </Fragment>)
}
