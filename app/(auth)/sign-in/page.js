/*
    Import React & Next
*/
import React from 'react'

/*
    Import styling
*/
import styles from './page.module.css'

/*
    Import Feature
*/
import { FeatureSignIn } from 'features'


export const metadata = {
    title: 'Dermatecno Apps - Sign In',
    description: 'SaaS system that designed especially for you - Aesthetic Clinic',
}

export default function SignIn() {
    return (
        <FeatureSignIn styles={styles} />
    )
}
