import React from 'react'
import { Button } from 'react-bootstrap'

/*
    Import Utils
*/
import Skeleton from 'react-loading-skeleton'


export default function ComponentButtonAddRemove({ props }) {
    if (!props) {
        return (
            <>
                <Skeleton className='d-inline-block' count={1} height={30} width={230}/>
            </>
        )
    }
    return (
        <>
            <Button className="btn btn-md rounded bg-white text-primary">
                <i className="fe fe-user-plus"></i>  Tambah {props?.text}
            </Button>
            <Button className="btn btn-md btn-danger rounded mx-2 bg-white text-danger">
                <i className="fe fe-trash"></i>  Hapus {props?.text}
            </Button>
        </>
    )
}
