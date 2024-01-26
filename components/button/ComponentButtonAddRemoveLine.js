import React from 'react'
import { Button } from 'react-bootstrap'

export default function ComponentButtonAddRemoveLine() {
    return (
        <>
            <Button className='btn btn-lg btn-danger mr-2 bg-transparent text-danger' style={{ borderColor: 'transparent' }}><i className={`nav-icon fe fe-trash-2`}></i></Button>
            <Button className="btn btn-lg bg-transparent text-primary" style={{ borderColor: 'transparent' }}><i className={`nav-icon fe fe-plus-circle`}></i></Button>
        </>
    )
}
