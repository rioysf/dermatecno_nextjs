'use client'

import { Row, Col } from 'react-bootstrap';

const PageHeading = props => {
    const { heading } = props;
    return (
        <Row>
            <Col lg={12} md={12} xs={12}>
                {/* Page header */}
                {/* <div className="border-bottom pb-4 mb-4 "> */}
                <div className="pb-1 mb-1 ">
                    <h1 className="mb-0 fw-bold text-white">
                        {heading}
                    </h1>
                </div>
            </Col>
        </Row>
    )
}

export default PageHeading