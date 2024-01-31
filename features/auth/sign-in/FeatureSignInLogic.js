/*
    Import React & Next
*/
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

/*
    Import Utils
*/
import DateUtility  from '@/utils/date-utility'



async function SignInHandler ({ signInHandler, data }) {
    const res = await signInHandler(data)
    
    if (res?.code !== 200) {
        return {
            code: res?.code,
            message: res?.message
        }
    } else {
        return
    }
}

function ValidationHandler (data) {
    let message = ""

    Object.entries(data).forEach(entry => {
        let [key, value] = entry;
        if (value === '') {
            key === 'login' ? key = 'Email atau Username' : key
            key === 'password' ? key = 'Kata Sandi' : key
            message += `${key.charAt(0).toUpperCase() + key.slice(1)} tidak boleh kosong.\n`
        }
    });

    if (message) {
        return message
    }

    return
}


export default function FeatureSignInLogic({ signInHandler }) {
    const router = useRouter()

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

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

    const [show, setShow] = useState(false)
	const [error, errorMessage] = useState("")
	const [disabled, setDisabled] = useState("")


    /*
        Run Login Function
    */
    const doSignIn = async (e) => {
        setShow(false)
        errorMessage("")
        setDisabled("disabled")
    
        e.preventDefault();
        
        const data = {
            login: email,
            password: password
        }

        /*
            Validation
        */
        const doValidation = ValidationHandler(data)

        if (doValidation) {
            errorMessage(doValidation)
            setDisabled("")
            return setShow(true)
        }

        /*
            Hit Endpoint
        */
        const doSignIn = await SignInHandler({ signInHandler, data })

        if (doSignIn) {
            errorMessage(doSignIn?.message)
            setDisabled("")
            return setShow(true)
        } 
        
        setDisabled("")
        router.push('/')
    }

    return {
        buttonSignIn,
        footerProps,
        loading,
        router,
        email,
        setEmail,
        password,
        setPassword,
        show,
        setShow,
        error,
        errorMessage,
        disabled,
        setDisabled,
        doSignIn
    }
}
