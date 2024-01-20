import React from 'react'
import { Card } from 'react-bootstrap';

const Information = ({text}) => {
    let information = text?.length > 0 ? text : 'Tidak ada informasi.' 

    return (
        <>
            <Card className='card-rounded-top'>
                <Card.Body>
                    <Card.Title className='display-7 mb-0 text-black' style={{ 'letterSpacing': '3px' }}>
                        INFORMASI <i className={`nav-icon fe fe-info me-2`}></i>
                    </Card.Title>
                </Card.Body>
            </Card>
            <Card className='card-rounded-bottom'>
                <Card.Body>
                    <Card.Text className='text-black'>
                        {information}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
)
}

export default Information
