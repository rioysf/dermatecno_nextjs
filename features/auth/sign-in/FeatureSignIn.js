'use client'

/*
    Import React & Next
*/
import React, { lazy } from 'react'
import Link from 'next/link'
import Image from 'next/image'

/*
    Import Utils
*/
import Skeleton from 'react-loading-skeleton'
import { Alert, Button, Form } from 'react-bootstrap'


/*
    Import Components
*/
const ComponentButton = lazy(() => import('../../../components/button/ComponentButton'), {
    suspense: true,
    ssr: false,
})

const ComponentFooterAuth = lazy(() => import('../../../components/auth/footer/ComponentFooterAuth'), {
    suspense: true,
    ssr: false,
})
 
const ComponentSkeletonAuth = lazy(() => import('../../../components/auth/skeleton/ComponentSkeletonAuth'), {
    suspense: true,
    ssr: false,
})

/*
    Import Logic
*/

import FeatureSignInLogic from './FeatureSignInLogic'


export default function SignIn({ styles, signInHandler }) {
    const {
        buttonSignIn,
        footerProps,
        loading,
        email,
        setEmail,
        password,
        setPassword,
        show,
        setShow,
        error,
        disabled,
        doSignIn
    } = FeatureSignInLogic({signInHandler})

    return (
        <div className={styles.container__sign_in}>
            <div className="w-full max-w-sm d-flex justify-content-center">
                <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={doSignIn}>
                    <Image className="mb-5" src="/dermatecno.jpeg" width={500} height={100} alt="Dermatecno App" priority/>
                    {
                        loading ? 
                        (
                            <ComponentSkeletonAuth />
                        ) : 
                        (
                            <>
                                <Form.Group className="mb-4" controlId="email">
                                    <Form.Label className="text-sm">Email atau username</Form.Label>
                                    <Form.Control className="form-control-sm" type="text" name="email" placeholder="john@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required="" />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="password">
                                    <Form.Label className="text-sm">Kata Sandi</Form.Label>
                                    <Form.Control className="form-control-sm" type="password" name="password" placeholder="**************" value={password} onChange={(e) => setPassword(e.target.value)} required="" 
                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <div className="flex items-center justify-between">
                                        <ComponentButton props={buttonSignIn} disabled={disabled} />
                                        <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" style={{ 'textDecoration': 'none' }} href='https://dermatecno.com/web/reset_password'>
                                            Lupa Kata Sandi?
                                        </Link>
                                    </div>
                                </Form.Group>
                                <Alert className='mt-4' key="danger" variant="danger" show={show} >
                                    <div style={{ 'fontSize': '14px', 'whiteSpace': 'pre-line' }}>
                                        {error}
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-end">
                                        <Button className="btn-sm" onClick={() => setShow(false)} variant="outline-danger" >
                                            Tutup
                                        </Button>
                                    </div>
                                </Alert>                          
                            </>
                        )
                    }
                    <hr />
                    {
                        loading ? 
                        (
                            <Skeleton count={1}/>
                        ) : 
                        (
                            <ComponentFooterAuth props={footerProps} />
                        )
                    }
                </Form>
            </div>
        </div>
    )
}
