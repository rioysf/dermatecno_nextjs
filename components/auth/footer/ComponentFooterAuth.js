import React from 'react'

export default function ComponentsAuthFooter({ props }) {
    return (
        <p className="text-center text-gray-500 text-xs">
            {props?.footer_year} {props?.footer_description}
        </p>
    )
}
