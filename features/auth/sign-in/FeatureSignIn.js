'use client'

/*
    Import React & Next
*/
import React, { useEffect, useState, lazy } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

/*
    Import Utils
*/
import DateUtility  from '@/utils/date-utility'
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



export default function SignIn({ styles, signInHandler }) {
    const [buttonSignIn, setButtonSignIn] = useState('')
    const [footerProps, setFooterProps] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        /*
            Button Text
        */
        setButtonSignIn({
            text: 'Masuk',
            type: 'submit'
        })

        /*
            Footer Detail
        */
        const date_utility = new DateUtility
        let footer_year = '© ' + date_utility.getCurrentDate().getFullYear().toString()
        let footer_description = "Dermatecno. All rights reserved."

        setFooterProps({
            footer_year,
            footer_description
        })
        
        setLoading(false)

        return () => {
            setButtonSignIn('')
            setFooterProps([])
            setLoading(true)
        }
    }, [])

    const router = useRouter()

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

    const [show, setShow] = useState(false)
	const [error, errorMessage] = useState("")
	const [disabled, setDisabled] = useState("")

    const doSignIn = async (e) => {
        setShow(false)
        errorMessage("")
        setDisabled("disabled")
    
        e.preventDefault();
    
        if (email === "" || password === "") {
            errorMessage("Email atau password tidak boleh kosong!")
            setDisabled("")
            return setShow(true)
        }
        
        const formData = new FormData();
    
        formData.append('login', email);
        formData.append('password', password);
    
        const object = {};
    
        formData.forEach(function (value, key) {
            object[key] = value;
        });

        try {
            const res = await signInHandler(object)
            if (res?.code !== 200) {
                errorMessage(res?.message)
                setDisabled("")
                return setShow(true)
            }
            router.push('/')
        } catch (error) {
            setDisabled("")
        }
    }
    

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
                                    <p style={{ 'fontSize': '14px' }}>
                                        {error}
                                    </p>
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
