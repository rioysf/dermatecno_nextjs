import React from 'react'
import { Button } from 'react-bootstrap'

/*
    Import Utils
*/
import Skeleton from 'react-loading-skeleton'


export default function ComponentButtonPayValidateCancel({ props }) {
    let create = props?.create ?? true

    return (
        <>
            <Button className="btn btn-md rounded mr-2 mb-2 bg-success border-success">
                <i className="fe fe-credit-card"></i>  Bayar
            </Button>
            <Button className="btn btn-md rounded mr-2 mb-2 bg-secondary border-secondary">
                <i className="fe fe-activity"></i>  Proses
            </Button>
            <Button className="btn btn-md rounded mr-2 mb-2 bg-danger border-danger">
                <i className="fe fe-x"></i>  Batalkan
            </Button>
        </>
    )
}
