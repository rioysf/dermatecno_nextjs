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
const ComponentButtonPay = lazy(() => import('../../../../components/button/ComponentButtonPayValidateCancel'), {
    suspense: true,
    ssr: false,
})
const ComponentButtonSaveCancel = lazy(() => import('../../../../components/button/ComponentButtonSaveCancel'), {
    suspense: true,
    ssr: false,
})

export default function FeatureBarangKeluarCreate() {
    const [buttonAddRemove, setButtonAddRemove] = useState('')
    const [loading, setLoading] = useState(true)

    const [tipe, setSipe] = useState(false)
    const [jadwal, setJadwal] = useState(false)

    useEffect(() => {
        /*
            Button Text
        */
        setButtonAddRemove({
            text: 'Barang Keluar',
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
                                            DATA PENJUALAN
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className='card-rounded-bottom'>
                                    <Card.Body>
                                        <Form>
                                            <Row>
                                                <Col xs={12} md={6}>
                                                    <div className='mb-5 p-3 text-primary text-center rounded' style={{
                                                        width: '180px',
                                                        background: '#EAF3FB'
                                                    }}>
                                                        <h1 className='m-0 fw-bold text-primary'>SO0001</h1>
                                                    </div>
                                                    <Form.Group className="mb-3" controlId="name">
                                                        <Form.Label className='fw-bold text-primary form-required-label'>Nama Pasien</Form.Label>
                                                        <Form.Control className='text-black' type="text" placeholder="Iman" onChange={() => setSipe(true)}/>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="address">
                                                        <Form.Label className='fw-bold text-primary form-required-label'>Alamat Pasien</Form.Label>
                                                        <Form.Control className='text-black' type="text" as="textarea" rows={3} placeholder="Iman" />
                                                    </Form.Group>
                                                </Col>
                                                <Col xs={12} md={6}>
                                                    <Form.Group className="mb-3" controlId="state">
                                                        <Form.Label className='fw-bold text-primary form-required-label'>Status</Form.Label>
                                                        <br/>
                                                        <Button className='rounded-pill bg-primary mr-2 mb-2 fw-bold'>
                                                            Draf
                                                        </Button>
                                                        <Button className='rounded-pill bg-secondary mr-2 mb-2 fw-bold'>
                                                            Proses
                                                        </Button>
                                                        <Button className='rounded-pill bg-danger border-danger mr-2 mb-2 fw-bold'>
                                                            Dibatalkan
                                                        </Button>
                                                        <Button className='rounded-pill bg-success border-success mr-2 mb-2 fw-bold'>
                                                            Lunas
                                                        </Button>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="date">
                                                        <Form.Label className='fw-bold text-primary form-required-label'>Tanggal Pembelian</Form.Label>
                                                        <Form.Control className='text-black' type="date" />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className='fw-bold text-primary form-required-label'>Pembayaran</Form.Label>
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
                                                                Bayar Langsung
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
                                                                Transfer
                                                            </ToggleButton>
                                                        </ButtonGroup>
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
                                                    width: '320px',
                                                    background: '#EAF3FB'
                                                }}>
                                                    <p className='m-0'>Jumlah Produk dan Layanan : <i className="fe fe-box"></i> <span className='fw-bold'>3 Jenis</span></p>
                                                </div>
                                                <Card className='mb-5'>
                                                    <Table responsive className="table table-striped text-nowrap">
                                                        <thead>
                                                            <tr className='text-center'>
                                                                <th className="text-black">PRODUK</th>
                                                                <th className="text-black">JUMLAH</th>
                                                                <th className="text-black">NOMINAL</th>
                                                                <th className="text-black">SUBTOTAL</th>
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
                                                                        <InputGroup.Text className='form-control text-black' style={{ 'maxWidth':'55px' }}>Rp</InputGroup.Text>
                                                                        <Form.Control className='text-black' type="text" placeholder="10,000,000" />
                                                                    </InputGroup>
                                                                </td>
                                                                <td className="align-middle">
                                                                    <InputGroup>
                                                                        <InputGroup.Text className='form-control text-black' style={{ 'maxWidth':'55px' }}>Rp</InputGroup.Text>
                                                                        <Form.Control className='text-black' type="text" placeholder="10,000,000" />
                                                                    </InputGroup>
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
                                                            <p className='text-black'>Total harga pada penjualan: <span className='fw-bold text-black'>SO0001</span></p>
                                                        </div>
                                                    </Col>
                                                    <Col xs={12} md={6}>
                                                        <Table>
                                                            <tbody>
                                                                <tr>
                                                                    <th className='text-right text-primary border-0'>Harga belum termaksuk pajak:</th>
                                                                    <td className='fw-bold text-right text-primary border-0'>Rp. 900,000,000</td>
                                                                </tr>
                                                                <tr>
                                                                    <th className='text-right text-primary border-0'>Pajak:</th>
                                                                    <td className='fw-bold text-right text-primary'>Rp. 900,000</td>
                                                                </tr>
                                                                <tr>
                                                                    <th className='text-right text-primary border-0'>Total:</th>
                                                                    <td className='fw-bold text-right text-primary border-0'>Rp. 900,000</td>
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
                    </Row>
                </Col>
                <Col xs={12} md={3} className='mb-5'>
                    <ComponentCardInformation />
                </Col>
            </Row>
        </>
    )
}
