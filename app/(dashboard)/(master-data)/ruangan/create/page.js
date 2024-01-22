/*
    Import React & Next
*/
import React, { Fragment, lazy } from 'react'
import { Container, Col, Row } from 'react-bootstrap'

/*
    Import Components
*/
const ComponentPageHeadingBackground = lazy(() => import('../../../../../components/page/ComponentPageHeadingBackground'), {
    suspense: true,
    ssr: false,
})
const ComponentPageHeading = lazy(() => import('../../../../../components/page/ComponentPageHeading'), {
    suspense: true,
    ssr: false,
})
const ComponentBreadcrumbs = lazy(() => import('../../../../../components/breadcrumb/ComponentBreadcrumbs'), {
    suspense: true,
    ssr: false,
})

/*
    Import Feature
*/
import { FeatureRuanganCreate } from 'features'


export const metadata = {
    title: 'Dermatecno Apps - Buat Ruangan',
    description: 'SaaS system that designed especially for you - Aesthetic Clinic',
}

export default function Ruangan() {
    const breadcrumb = ['Beranda', 'Ruangan', 'Buat Ruangan']
    return (
        <Fragment>
            <ComponentPageHeadingBackground/>
            <Container fluid className="mt-n16 px-6">
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        {/* Page Heading */}
                        <ComponentPageHeading heading={'Buat Ruangan'}/>
                        {/* Breadscrumb */}
                        <ComponentBreadcrumbs breadcrumb={breadcrumb} />
                    </Col>
                    <Col lg={12} md={12} xs={12} className='mt-8'>
                        {/* Feature */}
                        <FeatureRuanganCreate/>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
