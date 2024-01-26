'use client'

import React, { useState, useEffect, lazy } from 'react'
import { Button, ButtonGroup, Card, Col, Form, Row, Table, ToggleButton } from 'react-bootstrap'

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

export default function FeaturePasienCreate() {
    const [buttonAddRemove, setButtonAddRemove] = useState('')
    const [loading, setLoading] = useState(true)

    const [tipe, setSipe] = useState(false)
    const [jadwal, setJadwal] = useState(false)

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

    const [gender, setGender] = useState(null)
    const [type, setType] = useState(null)

    const handleToggleGender = (value) => {
        setGender(value === gender ? null : value)
    };

    const handleToggleType = (value) => {
        setType(value === type ? null : value)
    };

    const [imageFile, setImageFile] = useState(null);

    const uploadToClient = () => {
        setImageFile(document.getElementById('file').files[0]);
    };	

    const openFileInput = () => {
        const fileInput = document.getElementById('file');
        fileInput.click();
    }

    return (
        <>
            <Row>
                <Col xs={12} md={9} className='mb-5'>
                    <Row>
                        <Col xs={12} md={12} className='mb-5'>
                            <Card className="card-transparant-border">
                                <Card className='card-rounded-top'>
                                    <Card.Body>
                                        <Card.Title className='display-7 mb-0 text-black' style={{ 'letterSpacing': '3px' }}>
                                            DATA PASIEN
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
                                                        <Form.Control className='text-black' type="text" placeholder="Iman" onChange={() => setSipe(true)}/>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="no_staff">
                                                        <Form.Label className='fw-bold text-primary'>Nomor Staff Medis</Form.Label>
                                                        <Form.Control className='text-black' type="text" placeholder="Akan teriisi otomatis setelah disimpan" readOnly={1}/>
                                                    </Form.Group>
                                                    <Row>
                                                        <Col xs={12} md={4}>
                                                            <Form.Group className="mb-3" controlId="date">
                                                                <Form.Label className='fw-bold text-primary form-required-label'>Tanggal</Form.Label>
                                                                <Form.Control className='text-black' type="date" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xs={12} md={8}>
                                                            <Form.Group className="mb-3">
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
                                                                        onClick={() => handleToggleGender('male')}
                                                                    >
                                                                        <i className="fe fe-gender-male"></i> Laki-laki
                                                                    </ToggleButton>

                                                                    <ToggleButton
                                                                        className="rounded"
                                                                        type="radio"
                                                                        variant={gender === 'female' ? 'outline-primary' : 'outline-secondary'}
                                                                        value="female"
                                                                        checked={gender === 'female'}
                                                                        onChange={() => {}} // This is needed to satisfy the console warning, but it does nothing
                                                                        onClick={() => handleToggleGender('female')}
                                                                    >
                                                                        <i className="fe fe-arrow-down"></i> Perempuan
                                                                    </ToggleButton>
                                                                </ButtonGroup>
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                    <Form.Group className="mb-3" controlId="email">
                                                        <Form.Label className='fw-bold text-primary form-required-label'>Email</Form.Label>
                                                        <Form.Control className='text-black' type="email" placeholder="name@example.com" />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="phone">
                                                        <Form.Label className='fw-bold text-primary form-required-label'>No. HP</Form.Label>
                                                        <Form.Control className='text-black' type="text" placeholder="085xxxxxxx" />
                                                    </Form.Group>
                                                </Col>
                                                <Col xs={12} md={6}>
                                                    <Form.Group className="mb-3" controlId="address">
                                                        <Form.Label className='fw-bold text-primary form-required-label'>Alamat</Form.Label>
                                                        <Form.Control className='text-black' as="textarea" rows={5} placeholder="Jln. Jakarta No. 1"/>
                                                    </Form.Group>
                                                    <Row>
                                                        <Col xs={12} md={6}>
                                                            <Form.Group className="mb-3" controlId="city">
                                                                <Form.Label className='fw-bold text-primary form-required-label'>Kota/Kabupaten</Form.Label>
                                                                <Form.Select className='text-black' aria-label="Default select example">
                                                                    <option>Open this select menu</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Select>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3" controlId="rt">
                                                                <Form.Label className='fw-bold text-primary form-required-label'>RT</Form.Label>
                                                                <Form.Control className='text-black' type="text" placeholder="01" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xs={12} md={6}>
                                                            <Form.Group className="mb-3" controlId="state">
                                                                <Form.Label className='fw-bold text-primary form-required-label'>Provinsi</Form.Label>
                                                                <Form.Select className='text-black' aria-label="Default select example">
                                                                    <option>Open this select menu</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Select>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3" controlId="rw">
                                                                <Form.Label className='fw-bold text-primary form-required-label'>RW</Form.Label>
                                                                <Form.Control className='text-black' type="text" placeholder="01" />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Card>
                        </Col>
                        <Col xs={12} md={12} className='text-right'>
                            <ComponentButtonSaveCancel/>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={3} className='mb-5'>
                    <ComponentCardInformation />
                </Col>
            </Row>
        </>
    )
}
