'use client'

import React, { useState, useEffect, lazy } from 'react'
import { ButtonGroup, Card, Col, Form, Row, ToggleButton } from 'react-bootstrap'

/*
    Import Components
*/
const ComponentCardInformation = lazy(() => import('../../../../components/card/ComponentCardInformation'), {
    suspense: true,
    ssr: false,
})
const ComponentButtonSaveCancel = lazy(() => import('../../../../components/button/ComponentButtonSaveCancel'), {
    suspense: true,
    ssr: false,
})


export default function FeatureStaff() {
    const [buttonAddRemove, setButtonAddRemove] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        /*
            Button Text
        */
        setButtonAddRemove({
            text: 'Staff',
        })
        
        setLoading(false)

        return () => {
            setButtonAddRemove('')
            setLoading(true)
        }
    }, [])

    const [gender, setGender] = useState(null);

    const handleToggle = (value) => {
        setGender(value === gender ? null : value);
    };

    return (
        <>
            <Row>
                <Col xs={12} md={12} className='mb-5'>
                    <ComponentButtonSaveCancel/>
                </Col>
                <Col xs={12} md={9} className='mb-5'>
                    <Row>
                        <Col xs={12} md={12} className='mb-5'>
                            <Card className="card-transparant-border">
                                <Card className='card-rounded-top'>
                                    <Card.Body>
                                        <Card.Title className='display-7 mb-0 text-black' style={{ 'letterSpacing': '3px' }}>
                                            INFORMASI STAFF
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className='card-rounded-bottom'>
                                    <Card.Body>
                                        <Form>
                                            <Row>
                                                <Col xs={12} md={6}>
                                                    <Form.Group className="mb-3" controlId="name">
                                                        <Form.Label className='fw-bold text-primary form-required-label'>Nama Staff Medis</Form.Label>
                                                        <Form.Control className='text-black' type="text" placeholder="Iman" />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="phone">
                                                        <Form.Label className='fw-bold text-primary'>Nomor Staff Medis</Form.Label>
                                                        <Form.Control className='text-black' type="text" placeholder="Akan teriisi otomatis setelah disimpan" readOnly={1}/>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="gender">
                                                        <Form.Label className='fw-bold text-primary form-required-label'>Jenis Kelamin</Form.Label>
                                                        <br/>
                                                        <ButtonGroup>
                                                            <ToggleButton
                                                                className="mr-2 rounded"
                                                                type="radio"
                                                                variant={gender === 'male' ? 'outline-primary' : 'outline-secondary'}
                                                                value="male"
                                                                checked={gender === 'male'}
                                                                onChange={() => {}} // This is needed to satisfy the console warning, but it does nothing
                                                                onClick={() => handleToggle('male')}
                                                            >
                                                                <i className="fe fe-arrow-up-right"></i> Laki-laki
                                                            </ToggleButton>

                                                            <ToggleButton
                                                                className="rounded"
                                                                type="radio"
                                                                variant={gender === 'female' ? 'outline-primary' : 'outline-secondary'}
                                                                value="female"
                                                                checked={gender === 'female'}
                                                                onChange={() => {}} // This is needed to satisfy the console warning, but it does nothing
                                                                onClick={() => handleToggle('female')}
                                                            >
                                                                <i className="fe fe-arrow-down"></i> Perempuan
                                                            </ToggleButton>
                                                        </ButtonGroup>
                                                    </Form.Group>
                                                </Col>
                                                <Col xs={12} md={6}>
                                                    <Form.Group className="mb-3" controlId="email">
                                                        <Form.Label className='fw-bold text-primary form-required-label'>Email</Form.Label>
                                                        <Form.Control className='text-black' type="email" placeholder="name@example.com" />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="phone">
                                                        <Form.Label className='fw-bold text-primary form-required-label'>No. HP</Form.Label>
                                                        <Form.Control className='text-black' type="text" placeholder="Jhon" />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="address">
                                                        <Form.Label className='fw-bold text-primary form-required-label'>Alamat</Form.Label>
                                                        <Form.Control className='text-black' as="textarea" rows={3} placeholder="Jln. Jakarta No. 1"/>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Card>
                        </Col>
                        <Col xs={12} md={12} className='mb-5'>
                            <Card className="card-transparant-border">
                                <Card className='card-rounded-top'>
                                    <Card.Body>
                                        <Card.Title className='display-7 mb-0 text-black' style={{ 'letterSpacing': '3px' }}>
                                            TIPE STAFF MEDIS
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className='card-rounded-bottom'>
                                    <Card.Body>
                                        <Card.Text>
                                            Dapat diisi setelah mengisi lengkap data staff
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Card>
                        </Col>
                        <Col xs={12} md={12}>
                            <Card className="card-transparant-border">
                                <Card className='card-rounded-top'>
                                    <Card.Body>
                                        <Card.Title className='display-7 mb-0 text-black' style={{ 'letterSpacing': '3px' }}>
                                            JADWAL KETERSEDIAAN
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className='card-rounded-bottom'>
                                    <Card.Body>
                                        <Card.Text>
                                            Dapat diisi setelah mengisi lengkap data staff
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={3} className='mb-5'>
                    <ComponentCardInformation />
                </Col>
                <Col xs={12} md={12} className='mb-5'>
                    <ComponentButtonSaveCancel/>
                </Col>
            </Row>
        </>
    )
}
