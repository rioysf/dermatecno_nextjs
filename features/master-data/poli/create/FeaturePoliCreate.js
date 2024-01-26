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
const ComponentButtonAddRemoveLine = lazy(() => import('../../../../components/button/ComponentButtonAddRemoveLine'), {
    suspense: true,
    ssr: false,
})
const ComponentButtonSaveCancel = lazy(() => import('../../../../components/button/ComponentButtonSaveCancel'), {
    suspense: true,
    ssr: false,
})

export default function FeaturePoliCreate() {
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
                                            DATA POLI KLINIK
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className='card-rounded-bottom'>
                                    <Card.Body>
                                        <Form>
                                            <Row>
                                                <Col xs={12} md={4}>
                                                    <Form.Group className="mb-3" controlId="name">
                                                        <Form.Label className='fw-bold text-primary form-required-label'>Nama Poli Klinik</Form.Label>
                                                        <Form.Control className='text-black' type="text" placeholder="Poli Penyakit Dalam" onChange={() => setSipe(true)}/>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="note">
                                                        <Form.Label className='fw-bold text-primary'>Catatan</Form.Label>
                                                        <Form.Control className='text-black' type="text" as="textarea" placeholder="Poli Penyakit Dalam adalah poli khusus dokter penyakit dalam"/>
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
                                            JADWAL POLI KLINIK
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
                                                            <p className='m-0'>Jumlah Dokter: <i className="fe fe-user"></i> <span className='fw-bold'>3 Dokter </span></p>
                                                        </div>
                                                        <Card>
                                                            <Table responsive className="table table-striped text-nowrap">
                                                                <thead>
                                                                    <tr className='text-center'>
                                                                        <th></th>
                                                                        <th className="text-black">NO</th>
                                                                        <th className="text-black">NAMA DOKTER</th>
                                                                        <th className="text-black">RUANGAN</th>
                                                                        <th></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody id="has-data">
                                                                    <tr className='text-center'>
                                                                        <td></td>
                                                                        <td className="align-middle" value={1}>1</td>
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
                                                                        <ComponentButtonAddRemoveLine />
                                                                        </td>
                                                                    </tr>
                                                                    <tr className='text-center'>
                                                                        <td></td>
                                                                        <td className="align-middle" value={1}>1</td>
            
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
                                                                            <ComponentButtonAddRemoveLine />
                                                                        </td>
                                                                    </tr>
                                                                    <tr className='text-center'>
                                                                        <td></td>
                                                                        <td className="align-middle" value={1}>1</td>
                                                                        
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
                                                                        <ComponentButtonAddRemoveLine />
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
