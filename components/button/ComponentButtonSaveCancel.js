import React from 'react'
import { Button } from 'react-bootstrap'

/*
    Import Utils
*/
import Skeleton from 'react-loading-skeleton'


export default function ComponentButtonSaveCancel({ props }) {
    let create = props?.create ?? true

    return (
        <>
            <Button className="btn btn-md rounded ml-2 mb-2 bg-white text-primary">
                <i className="fe fe-save"></i>  Simpan {props?.text}
            </Button>
            {create && (
                <Button className="btn btn-md rounded ml-2 mb-2 bg-white text-primary">
                    <i className="fe fe-save"></i><i className="fe fe-plus"></i>  Simpan & Buat Baru
                </Button>
            )}
            <Button className="btn btn-md btn-danger rounded ml-2 mb-2 bg-white text-danger">
                <i className="fe fe-rotate-ccw"></i>  Batal & Kembali
            </Button>
        </>
    )
}
