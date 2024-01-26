import React from 'react'
import { Button } from 'react-bootstrap'

export default function ComponentBadge({props}) {
    return (
        <Button className={`rounded-pill mr-2 mb-2 fw-bold`}
            style={{
                backgroundColor: `${props?.variant}`,
                borderColor: `${props?.variant}`,
                color: `${props?.color}`
            }}
        >
            {props?.text}
        </Button>
    )
}
