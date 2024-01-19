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

/*
    Import Service
*/
import { authService } from 'services'

export const metadata = {
    title: 'Dermatecno Apps - Sign In',
    description: 'SaaS system that designed especially for you - Aesthetic Clinic',
}

export default async function SignIn() {

    // do sign in
    async function signInHandler (payload) {
        'use server'
        
        try {
            const res = await authService.signIn(payload)
            const data = res?.data
            if (data?.code !== 200) {
                throw new Error(data?.data[0]?.message || 'Unknown error')
            }
            return data
        } catch (error) {
            const data = {
                    code: 401,
                    message: error?.message
                } ?? {
                    code: 503,
                    message: "Something went wrong."
                }
            return data
        }
    };

    return (
        <FeatureSignIn styles={styles} signInHandler={signInHandler}/>
    )
}
