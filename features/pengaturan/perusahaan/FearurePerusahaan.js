'use client'

import React, { useState, useEffect, lazy } from 'react'
import { Button, ButtonGroup, Card, Col, Form, Row, Table, ToggleButton } from 'react-bootstrap'

/*
    Import Components
*/
const ComponentCardInformation = lazy(() => import('../../../components/card/ComponentCardInformation'), {
    suspense: true,
    ssr: false,
})
const ComponentButtonSaveCancel = lazy(() => import('../../../components/button/ComponentButtonSaveCancel'), {
    suspense: true,
    ssr: false,
})

export default function FeaturePerusahaanCreate() {
    const [buttonAddRemove, setButtonAddRemove] = useState('')
    const [loading, setLoading] = useState(true)

    const [tipe, setSipe] = useState(false)
    const [jadwal, setJadwal] = useState(false)

    useEffect(() => {
        /*
            Button Text
        */
        setButtonAddRemove({
            text: 'Perusahaan',
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
                                            DATA PERUSAHAAN
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className='card-rounded-bottom'>
                                    <Card.Body>
                                        <Form>
                                            <Row>
                                                <Col xs={12} md={6}>
                                                {/* {imageFile && ( */}
                                                    <Row>
                                                        <Col xs={6} sm={6} md={12} lg={4}>
                                                            <img className='form-control border-3 border-dashed border-primary mb-2' src={imageFile ? URL.createObjectURL(imageFile) : '/images/image/unggah_foto.png'} onClick={() => openFileInput()} alt="Uploaded Image" style={{
                                                                'width':'100%',
                                                                'height':'auto',
                                                                'cursor':'pointer',
                                                            }}/>
                                                        </Col>
                                                        <Col xs={12} sm={12} md={12}>
                                                            <Card className='w-100 h-100 justify-content-center mb-2' style={{
                                                                boxShadow: '0px 0px transparent !important'
                                                            }}>
                                                                <p className='text-danger'>
                                                                    Besar file: maksimum 10.000.000 bytes(10 Megabytes). Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG
                                                                </p>
                                                            </Card>
                                                        </Col>
                                                        <Col xs={12} md={6}>
                                                            
                                                        </Col>
                                                    </Row>
                                                {/* )} */}
                                                    <Form.Group className="mb-3 d-none" controlId="file">
                                                        <Form.Label className='fw-bold text-primary'>Unggah Foto</Form.Label>
                                                        <Form.Control onChange={uploadToClient} name="file" type="file"/>
                                                    </Form.Group>
                                                </Col>
                                                <Col xs={12} md={6}>
                                                    <Form.Group className="mb-3" controlId="name">
                                                        <Form.Label className='fw-bold text-primary form-required-label'>Nama Perusahaan</Form.Label>
                                                        <Form.Control className='text-black' type="text" placeholder="Executive A" />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="address">
                                                        <Form.Label className='fw-bold text-primary form-required-label'>Alamat</Form.Label>
                                                        <Form.Control className='text-black' type="text" as="textarea" rows={3} placeholder="Jln. Indonesia 1" />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="phone">
                                                        <Form.Label className='fw-bold text-primary form-required-label'>No. Telepon</Form.Label>
                                                        <Form.Control className='text-black' type="text" placeholder="085xxxxxx"/>
                                                    </Form.Group>
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
