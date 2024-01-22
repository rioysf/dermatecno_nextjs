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
const ComponentButtonSaveCancel = lazy(() => import('../../../../components/button/ComponentButtonSaveCancel'), {
    suspense: true,
    ssr: false,
})

export default function FeatureRekamMedisCreate() {
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
                                                        <Form.Label className='fw-bold text-primary form-required-label'>Nama Pasien</Form.Label>
                                                        <Form.Control className='text-black' type="text" placeholder="Iman" onChange={() => setSipe(true)}/>
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
                                                                Sudah Bayar
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
                                                                Belum Bayar
                                                            </ToggleButton>
                                                        </ButtonGroup>
                                                    </Form.Group>
                                                </Col>
                                                <Col xs={12} md={6}>
                                                    <Row>
                                                        <Col xs={12} md={6}>
                                                            <Form.Group className="mb-3" controlId="poli">
                                                                <Form.Label className='fw-bold text-primary form-required-label'>Poli Klinik</Form.Label>
                                                                <Form.Select className='text-black' aria-label="Default select example">
                                                                    <option>Pilih Poli</option>
                                                                    <option value="1">A</option>
                                                                    <option value="2">B</option>
                                                                </Form.Select>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3" controlId="date">
                                                                <Form.Label className='fw-bold text-primary form-required-label'>Tanggal</Form.Label>
                                                                <Form.Control className='text-black' type="date" />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3" controlId="room">
                                                                <Form.Label className='fw-bold text-primary form-required-label'>Ruangan</Form.Label>
                                                                <Form.Control className='text-black' type="text" placeholder='12' />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xs={12} md={6}>
                                                            <Form.Group className="mb-3" controlId="doctor">
                                                                <Form.Label className='fw-bold text-primary form-required-label'>Nama Dokter</Form.Label>
                                                                <Form.Select className='text-black' aria-label="Default select example">
                                                                    <option>Pilih Dokter</option>
                                                                    <option value="1">Iman</option>
                                                                    <option value="2">Kea</option>
                                                                </Form.Select>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3" controlId="time">
                                                                <Form.Label className='fw-bold text-primary form-required-label'>Jam Praktek</Form.Label>
                                                                <Form.Control className='text-black' type="time" />
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
                        <Col xs={12} md={12} className='mb-5'>
                            <Card className="card-transparant-border">
                                <Card className='card-rounded-top'>
                                    <Card.Body>
                                        <Card.Title className='display-7 mb-0 text-black' style={{ 'letterSpacing': '3px' }}>
                                            LAYANAN
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className='card-rounded-bottom'>
                                    <Card.Body>
                                        <Row>
                                            <Col xs={12} md={12}>
                                                {tipe ? (
                                                    <>
                                                        <div className='mb-5 p-3 text-primary rounded' style={{
                                                            width: '280px',
                                                            background: '#EAF3FB'
                                                        }}>
                                                            <p className='m-0'>Jumlah layanan : <i className="fe fe-box"></i> <span className='fw-bold'>3 Layanan</span></p>
                                                        </div>
                                                        <Card>
                                                            <Table responsive className="table table-striped text-nowrap">
                                                                <thead>
                                                                    <tr className='text-center'>
                                                                        <th></th>
                                                                        <th className="text-black">NO</th>
                                                                        <th className="text-black">PRODUK</th>
                                                                        <th className="text-black">JUMLAH</th>
                                                                        <th></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody id="has-data">
                                                                    <tr className='text-center'>
                                                                        <td></td>
                                                                        <td className="align-middle" value={1}>1</td>
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
                                                                            <Button className='btn btn-lg btn-danger mr-2 bg-transparent text-danger' style={{ borderColor: 'transparent' }}><i className={`nav-icon fe fe-trash-2`}></i></Button>
                                                                            <Button className="btn btn-lg bg-transparent text-primary" style={{ borderColor: 'transparent' }}><i className={`nav-icon fe fe-plus-circle`}></i></Button>
                                                                        </td>
                                                                    </tr>
                                                                    <tr className='text-center'>
                                                                        <td></td>
                                                                        <td className="align-middle" value={2}>2</td>
                                                                        <td className="align-middle">
                                                                            <Form.Select className='text-black' aria-label="Default select example">
                                                                                <option>Pilih Layanan</option>
                                                                                <option value="1">Buku</option>
                                                                                <option value="2">Pensil</option>
                                                                            </Form.Select>
                                                                        </td>
                                                                        <td className="align-middle">
                                                                            <Form.Control className='text-black' type="text" placeholder="10,000,000" />
                                                                        </td>
                                                                        <td className="align-middle">
                                                                            <Button className='btn btn-lg btn-danger mr-2 bg-transparent text-danger' style={{ borderColor: 'transparent' }}><i className={`nav-icon fe fe-trash-2`}></i></Button>
                                                                            <Button className="btn btn-lg bg-transparent text-primary" style={{ borderColor: 'transparent' }}><i className={`nav-icon fe fe-plus-circle`}></i></Button>
                                                                        </td>
                                                                    </tr>
                                                                    <tr className='text-center'>
                                                                        <td></td>
                                                                        <td className="align-middle" value={3}>3</td>
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
                                                                            <Button className='btn btn-lg btn-danger mr-2 bg-transparent text-danger' style={{ borderColor: 'transparent' }}><i className={`nav-icon fe fe-trash-2`}></i></Button>
                                                                            <Button className="btn btn-lg bg-transparent text-primary" style={{ borderColor: 'transparent' }}><i className={`nav-icon fe fe-plus-circle`}></i></Button>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </Card>
                                                    </>
                                                    
                                                ) : (
                                                    <Card.Text>
                                                        Dapat diisi setelah mengisi lengkap data staff
                                                    </Card.Text>
                                                )}
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Card>
                        </Col>
                        <Col xs={12} md={12} className='mb-5'>
                            <Card className="card-transparant-border">
                                <Card className='card-rounded-top'>
                                    <Card.Body>
                                        <Card.Title className='display-7 mb-0 text-black' style={{ 'letterSpacing': '3px' }}>
                                            PEMBAYARAN DIAWAL (DOWN PAYMENT)
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className='card-rounded-bottom'>
                                    <Card.Body>
                                        <Row>
                                            <Col xs={12} md={12}>
                                                {tipe ? (
                                                    <>
                                                        <Card>
                                                            <Table responsive className="table table-striped text-nowrap">
                                                                <thead>
                                                                    <tr className='text-center'>
                                                                        <th></th>
                                                                        <th className="text-black">NO</th>
                                                                        <th className="text-black">JURNAL</th>
                                                                        <th className="text-black">TANGGAL</th>
                                                                        <th className="text-black">NOMINAL</th>
                                                                        <th></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody id="has-data">
                                                                    <tr className='text-center'>
                                                                        <td></td>
                                                                        <td className="align-middle" value={1}>1</td>
                                                                        <td className="align-middle">
                                                                            <Form.Select className='text-black' aria-label="Default select example">
                                                                                <option>Pilih Jurnal</option>
                                                                                <option value="1">Deposit</option>
                                                                            </Form.Select>
                                                                        </td>
                                                                        <td className="align-middle">
                                                                            <Form.Control className='text-black' type="date" />
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
                                                    </>
                                                    
                                                ) : (
                                                    <Card.Text>
                                                        Dapat diisi setelah mengisi lengkap data staff
                                                    </Card.Text>
                                                )}
                                            </Col>
                                        </Row>
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
