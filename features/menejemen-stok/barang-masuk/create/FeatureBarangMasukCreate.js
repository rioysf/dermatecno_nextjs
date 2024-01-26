'use client'

import React, { useState, useEffect, lazy } from 'react'
import { Button, ButtonGroup, Card, Col, Form, Row, InputGroup, Table, ToggleButton } from 'react-bootstrap'

/*
    Import Components
*/
const ComponentCardInformation = lazy(() => import('../../../../components/card/ComponentCardInformation'), {
    suspense: true,
    ssr: false,
})
const ComponentBadge = lazy(() => import('../../../../components/badge/ComponentBadge'), {
    suspense: false,
    ssr: false,
})
const ComponentButtonPay = lazy(() => import('../../../../components/button/ComponentButtonPayValidateCancel'), {
    suspense: true,
    ssr: false,
})
const ComponentButtonSaveCancel = lazy(() => import('../../../../components/button/ComponentButtonSaveCancel'), {
    suspense: true,
    ssr: false,
})

export default function FeatureBarangMasukCreate() {
    const [buttonAddRemove, setButtonAddRemove] = useState('')
    const [badge, setBadge] = useState('')
    const [loading, setLoading] = useState(true)

    const [tipe, setSipe] = useState(false)
    const [jadwal, setJadwal] = useState(false)

    useEffect(() => {
        /*
            Button Text
        */
        setButtonAddRemove({
            text: 'Barang Masuk',
        })

        setBadge({
            text: 'Lunas',
            variant: '#D0F5E0',
            color: '#0D9047'
        })
        
        setLoading(false)

        return () => {
            setButtonAddRemove('')
            setBadge('')
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
                                            DATA BARANG MASUK
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className='card-rounded-bottom'>
                                    <Card.Body>
                                        <Form>
                                            <Row>
                                                <Col xs={12} md={6}>
                                                    <div className='mb-5 p-3 text-primary text-center rounded' style={{
                                                        width: '280px',
                                                        background: '#EAF3FB'
                                                    }}>
                                                        <h1 className='m-0 fw-bold text-primary'>DMT/02/2024</h1>
                                                    </div>
                                                    <Form.Group className="mb-3" controlId="name">
                                                        <Form.Label className='fw-bold text-primary form-required-label'>Nama Vendor</Form.Label>
                                                        <Form.Control className='text-black' type="text" placeholder="Iman" onChange={() => setSipe(true)}/>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="address">
                                                        <Form.Label className='fw-bold text-primary form-required-label'>Alamat Vendor</Form.Label>
                                                        <Form.Control className='text-black' type="text" as="textarea" rows={3} placeholder="Iman" />
                                                    </Form.Group>
                                                </Col>
                                                <Col xs={12} md={6}>
                                                    <Form.Group className="mb-3" controlId="state">
                                                        <Form.Label className='fw-bold text-primary form-required-label'>Status</Form.Label>
                                                        <br/>
                                                        <ComponentBadge props={badge}/>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="date">
                                                        <Form.Label className='fw-bold text-primary form-required-label'>Tanggal Pembelian</Form.Label>
                                                        <Form.Control className='text-black' type="date" />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="date_validation">
                                                        <Form.Label className='fw-bold text-primary form-required-label'>Tanggal Validasi</Form.Label>
                                                        <Form.Control className='text-black' type="date" />
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
                                            PRODUK / LAYANAN
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className='card-rounded-bottom'>
                                    <Card.Body>
                                        <Row>
                                            <Col xs={12} md={12}>
                                                <div className='mb-5 p-3 text-primary rounded' style={{
                                                    width: '250px',
                                                    background: '#EAF3FB'
                                                }}>
                                                    <p className='m-0'>Jumlah Produk: <i className="fe fe-box"></i> <span className='fw-bold'>3 Produk</span></p>
                                                </div>
                                                <Card className='mb-5'>
                                                    <Table responsive className="table table-striped text-nowrap">
                                                        <thead>
                                                            <tr className='text-center'>
                                                                <th className="text-black">PRODUK</th>
                                                                <th className="text-black">JUMLAH DIBELI</th>
                                                                <th className="text-black">LOT/ANGKA SERIAL</th>
                                                                <th className="text-black">JUMLAH DITERIMA</th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="has-data">
                                                            <tr className='text-center'>
                                                                <td className="align-middle">
                                                                    <Form.Select className='text-black' aria-label="Default select example">
                                                                        <option>Pilih Produk</option>
                                                                        <option value="1">Buku</option>
                                                                        <option value="2">Pensil</option>
                                                                    </Form.Select>
                                                                </td>
                                                                <td className="align-middle">
                                                                    <Form.Control className='text-black' type="text" placeholder="10,000,000" />
                                                                </td>
                                                                <td className="align-middle">
                                                                    <InputGroup>
                                                                        <InputGroup.Text className='form-control text-black' style={{ 'maxWidth':'55px' }}>#</InputGroup.Text>
                                                                        <Form.Control className='text-black' type="text" placeholder="10,000,000" />
                                                                    </InputGroup>
                                                                </td>
                                                                <td className="align-middle">
                                                                    <Form.Control className='text-black' type="text" placeholder="10,000,000" />
                                                                </td>
                                                                <td className="align-middle">
                                                                    <Button className='btn btn-lg btn-danger mr-2 bg-transparent text-danger' style={{ borderColor: 'transparent' }}><i className={`nav-icon fe fe-trash-2`}></i></Button>
                                                                    <Button className="btn btn-lg bg-transparent text-primary" style={{ borderColor: 'transparent' }}><i className={`nav-icon fe fe-plus-circle`}></i></Button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </Card>
                                                <Row>
                                                    <Col xs={12} md={6}>
                                                        <div className='mt-3'>
                                                            <p className='text-black'>Informasi Barang Masuk pada dokumen: <span className='fw-bold text-black'>DMT/02/2024</span></p>
                                                        </div>
                                                    </Col>
                                                    <Col xs={12} md={6}>
                                                        <Table>
                                                            <tbody>
                                                                <tr>
                                                                    <th className='text-right text-primary border-0'>Total Barang Dibeli:</th>
                                                                    <td className='fw-bold text-right text-primary border-0'>10 Produk</td>
                                                                </tr>
                                                                <tr>
                                                                    <th className='text-right text-primary border-0'>Total Barang Diterima:</th>
                                                                    <td className='fw-bold text-right text-primary'>15 Produk</td>
                                                                </tr>
                                                                <tr>
                                                                    <th className='text-right text-primary border-0'>Kelebihan/Kekurangan:</th>
                                                                    <td className='fw-bold text-right text-primary border-0'>+5 Produk</td>
                                                                </tr>
                                                                <tr>
                                                                    <th className='text-right text-primary border-0'>Kelebihan/Kekurangan:</th>
                                                                    <td className='fw-bold text-right text-danger border-0'>-5 Produk</td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Card>
                        </Col>
                        <Col xs={12} md={12}>
                            <Row>
                                <Col xs={12} md={6} className='text-left'>
                                    <ComponentButtonPay/>
                                </Col>
                                <Col xs={12} md={6} className='text-right'>
                                    <ComponentButtonSaveCancel/>
                                </Col>
                            </Row>
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
