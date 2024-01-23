'use client'

import React, { useState, useEffect, lazy } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

/*
    Import Components
*/
const ComponentButtonAddRemove = lazy(() => import('../../../components/button/ComponentButtonAddRemove'), {
    suspense: true,
    ssr: false,
})
const ComponentSearchBarTable = lazy(() => import('../../../components/search-bar/ComponentSearchbarTable'), {
    suspense: true,
    ssr: false,
})
const ComponentTable = lazy(() => import('../../../components/table/ComponentTable'), {
    suspense: true,
    ssr: false,
})

export default function FeatureBarangMasuk() {
    const [buttonAddRemove, setButtonAddRemove] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        /*
            Button Text
        */
        setButtonAddRemove({
            text: 'Barang Masuk',
        })
        
        setLoading(false)

        return () => {
            setButtonAddRemove('')
            setLoading(true)
        }
    }, [])


    return (
        <Card className="card-transparant-border">
            <Card className="card-transparant-no-shadow">
                <Row>
                    <Col lg={4} md={6} sm={12} xs={12} >
                        <Row>
                            <Col>
                                <ComponentButtonAddRemove props={buttonAddRemove}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={4} md={6} sm={12} xs={12} >
                    </Col>
                    <Col lg={4} md={6} sm={12} xs={12} >
                        <Row>
                            <Col>
                                <ComponentSearchBarTable/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
            <Card className="card-table">
                <ComponentTable />
            </Card>
        </Card>
    )
}
