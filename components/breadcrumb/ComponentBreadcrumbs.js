'use client'

import React from 'react'
import { Breadcrumb } from 'react-bootstrap';


const ComponentBreadcrumbs = ({ breadcrumb }) => {
    let maxBreadcrumb = breadcrumb.length
    return (
        <Breadcrumb className='pb-1 mb-1'>
            {breadcrumb.map((item, index) => {
                return (
                    <Breadcrumb.Item className='text-white' key={item} active={maxBreadcrumb === index + 1}>
                        {item}
                    </Breadcrumb.Item>
                )
            })}
        </Breadcrumb>
    )
}

export default ComponentBreadcrumbs
