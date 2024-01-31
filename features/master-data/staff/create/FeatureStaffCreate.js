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

export default function FeatureStaffCreate() {
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
                                            DATA STAFF
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
                                                    <Form.Group className="mb-3" controlId="name">
                                                        <Form.Label className='fw-bold text-primary form-required-label'>Nama Staff Medis</Form.Label>
                                                        <Form.Control className='text-black' type="text" placeholder="Iman" onChange={() => setSipe(true)}/>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="no_staff">
                                                        <Form.Label className='fw-bold text-primary'>Nomor Staff Medis</Form.Label>
                                                        <Form.Control className='text-black' type="text" placeholder="Akan teriisi otomatis setelah disimpan" readOnly={1}/>
                                                    </Form.Group>
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
                                                                <i className="fe fe-arrow-up-right"></i> Laki-laki
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
                                                <Col xs={12} md={6}>
                                                    <Form.Group className="mb-3" controlId="identification_number">
                                                        <Form.Label className='fw-bold text-primary'>No. KTP</Form.Label>
                                                        <Form.Control className='text-black' type="text" placeholder="327xxxxxxxxx" />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="email">
                                                        <Form.Label className='fw-bold text-primary form-required-label'>Email</Form.Label>
                                                        <Form.Control className='text-black' type="email" placeholder="name@example.com" />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="phone">
                                                        <Form.Label className='fw-bold text-primary form-required-label'>No. HP</Form.Label>
                                                        <Form.Control className='text-black' type="text" placeholder="085xxxxxxx" />
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
                                        <Row>
                                            <Col xs={12} md={12}>
                                                {tipe ? (
                                                    <Row>
                                                        <Col xs={12} md={6}>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label className='fw-bold text-primary form-required-label'>Tipe Staff</Form.Label>
                                                                <br/>
                                                                <ButtonGroup className='d-block'>
                                                                    <ToggleButton
                                                                        className="mr-2 mb-2 rounded"
                                                                        type="radio"
                                                                        variant={type === 'admin' ? 'outline-primary' : 'outline-secondary'}
                                                                        value="admin"
                                                                        checked={type === 'admin'}
                                                                        onChange={() => {}} // This is needed to satisfy the console warning, but it does nothing
                                                                        onClick={() => handleToggleType('admin')}
                                                                    >
                                                                        Administrator
                                                                    </ToggleButton>

                                                                    <ToggleButton
                                                                        className="mr-2 mb-2 rounded"
                                                                        type="radio"
                                                                        variant={type === 'dokter' ? 'outline-primary' : 'outline-secondary'}
                                                                        value="dokter"
                                                                        checked={type === 'dokter'}
                                                                        onChange={() => {}} // This is needed to satisfy the console warning, but it does nothing
                                                                        onClick={() => handleToggleType('dokter')}
                                                                    >
                                                                        Dokter
                                                                    </ToggleButton>

                                                                    <ToggleButton
                                                                        className="mr-2 mb-2 rounded"
                                                                        type="radio"
                                                                        variant={type === 'terapis' ? 'outline-primary' : 'outline-secondary'}
                                                                        value="terapis"
                                                                        checked={type === 'terapis'}
                                                                        onChange={() => {}} // This is needed to satisfy the console warning, but it does nothing
                                                                        onClick={() => handleToggleType('terapis')}
                                                                    >
                                                                        Terapis
                                                                    </ToggleButton>

                                                                    <ToggleButton
                                                                        className="mr-2 mb-2 rounded"
                                                                        type="radio"
                                                                        variant={type === 'kasir' ? 'outline-primary' : 'outline-secondary'}
                                                                        value="kasir"
                                                                        checked={type === 'kasir'}
                                                                        onChange={() => {}} // This is needed to satisfy the console warning, but it does nothing
                                                                        onClick={() => handleToggleType('kasir')}
                                                                    >
                                                                        Kasir
                                                                    </ToggleButton>

                                                                    <ToggleButton
                                                                        className="mr-2 mb-2 rounded"
                                                                        type="radio"
                                                                        variant={type === 'front_office' ? 'outline-primary' : 'outline-secondary'}
                                                                        value="front_office"
                                                                        checked={type === 'front_office'}
                                                                        onChange={() => {}} // This is needed to satisfy the console warning, but it does nothing
                                                                        onClick={() => handleToggleType('front_office')}
                                                                    >
                                                                        Front Office
                                                                    </ToggleButton>
                                                                </ButtonGroup>
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xs={12} md={6}>
                                                            {type === 'dokter' && (
                                                                <Form.Group className="mb-3" controlId="npa_idi">
                                                                    <Form.Label className='fw-bold text-primary form-required-label'>NPA-IDI</Form.Label>
                                                                    <Form.Control className='text-black' type="text" placeholder="NPA-0001-0001" />
                                                                </Form.Group>
                                                            )}
                                                             <Form.Group className="mb-3" controlId="note">
                                                                <Form.Label className='fw-bold text-primary'>Catatan</Form.Label>
                                                                <Form.Control className='text-black' as="textarea" rows={3} placeholder="Catatan"/>
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                    
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
                                            JADWAL KETERSEDIAAN
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className='card-rounded-bottom'>
                                    <Card.Body>
                                        <Row>
                                            <Col xs={12} md={12}>
                                                {(tipe && type !== 'admin') ? (
                                                    <>
                                                        <div className='mb-5 p-3 text-primary rounded' style={{
                                                            width: '280px',
                                                            background: '#EAF3FB'
                                                        }}>
                                                            <p className='m-0'>Jumlah Ketersediaan hari: <i className="fe fe-calendar"></i> <span className='fw-bold'>3 hari</span></p>
                                                        </div>
                                                        <Card>
                                                            <Table responsive className="table table-striped text-nowrap">
                                                                <thead>
                                                                    <tr className='text-center'>
                                                                        <th></th>
                                                                        <th className="text-black">NO</th>
                                                                        <th className="text-black">HARI</th>
                                                                        <th className="text-black">JAM PRAKTIK</th>
                                                                        <th className="text-black">SELESAI PRAKTIK</th>
                                                                        <th></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody id="has-data">
                                                                    <tr className='text-center'>
                                                                        <td></td>
                                                                        <td className="align-middle" value={1}>1</td>
                                                                        <td className="align-middle">
                                                                            <Form.Select className='text-black' aria-label="Default select example">
                                                                                <option>Pilih Hari</option>
                                                                                <option value="1">Senin</option>
                                                                                <option value="2">Selasa</option>
                                                                                <option value="3">Rabu</option>
                                                                                <option value="4">Kamis</option>
                                                                                <option value="5">Jum'at</option>
                                                                                <option value="6">Sabtu</option>
                                                                                <option value="7">Minggu</option>
                                                                            </Form.Select>
                                                                        </td>
                                                                        <td className="align-middle">
                                                                            <Form.Select className='text-black' aria-label="Default select example">
                                                                                <option>Open this select menu</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </Form.Select>
                                                                        </td>
                                                                        <td className="align-middle">
                                                                            <Form.Select className='text-black' aria-label="Default select example">
                                                                                <option>Open this select menu</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </Form.Select>
                                                                        </td>
                                                                        <td className="align-middle">
                                                                            <Button className='btn btn-lg btn-danger mr-2 bg-transparent text-danger' style={{ borderColor: 'transparent' }}><i className={`nav-icon fe fe-trash-2`}></i></Button>
                                                                            <Button className="btn btn-lg bg-transparent text-primary" style={{ borderColor: 'transparent' }}><i className={`nav-icon fe fe-plus-circle`}></i></Button>
                                                                        </td>
                                                                    </tr>
                                                                    <tr className='text-center'>
                                                                        <td></td>
                                                                        <td className="align-middle" value={1}>1</td>
                                                                        <td className="align-middle">
                                                                            <Form.Select className='text-black' aria-label="Default select example">
                                                                                <option>Pilih Hari</option>
                                                                                <option value="1">Senin</option>
                                                                                <option value="2">Selasa</option>
                                                                                <option value="3">Rabu</option>
                                                                                <option value="4">Kamis</option>
                                                                                <option value="5">Jum'at</option>
                                                                                <option value="6">Sabtu</option>
                                                                                <option value="7">Minggu</option>
                                                                            </Form.Select>
                                                                        </td>
                                                                        <td className="align-middle">
                                                                            <Form.Select className='text-black' aria-label="Default select example">
                                                                                <option>Open this select menu</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </Form.Select>
                                                                        </td>
                                                                        <td className="align-middle">
                                                                            <Form.Select className='text-black' aria-label="Default select example">
                                                                                <option>Open this select menu</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </Form.Select>
                                                                        </td>
                                                                        <td className="align-middle">
                                                                            <Button className='btn btn-lg btn-danger mr-2 bg-transparent text-danger' style={{ borderColor: 'transparent' }}><i className={`nav-icon fe fe-trash-2`}></i></Button>
                                                                            <Button className="btn btn-lg bg-transparent text-primary" style={{ borderColor: 'transparent' }}><i className={`nav-icon fe fe-plus-circle`}></i></Button>
                                                                        </td>
                                                                    </tr>
                                                                    <tr className='text-center'>
                                                                        <td></td>
                                                                        <td className="align-middle" value={1}>1</td>
                                                                        <td className="align-middle">
                                                                            <Form.Select className='text-black' aria-label="Default select example">
                                                                                <option>Pilih Hari</option>
                                                                                <option value="1">Senin</option>
                                                                                <option value="2">Selasa</option>
                                                                                <option value="3">Rabu</option>
                                                                                <option value="4">Kamis</option>
                                                                                <option value="5">Jum'at</option>
                                                                                <option value="6">Sabtu</option>
                                                                                <option value="7">Minggu</option>
                                                                            </Form.Select>
                                                                        </td>
                                                                        <td className="align-middle">
                                                                            <Form.Select className='text-black' aria-label="Default select example">
                                                                                <option>Open this select menu</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </Form.Select>
                                                                        </td>
                                                                        <td className="align-middle">
                                                                            <Form.Select className='text-black' aria-label="Default select example">
                                                                                <option>Open this select menu</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </Form.Select>
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
