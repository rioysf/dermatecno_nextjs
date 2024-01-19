import React from 'react'
import { InputGroup, Form} from 'react-bootstrap';

const ComponentSearchBarTable = () => {
    return (
        <>
            <InputGroup >
                <InputGroup.Text id="basic-addon2" className='card-search-icon'>
                    <i className='fe fe-search'></i>
                </InputGroup.Text>
                <Form.Control type="search"
                    placeholder="Cari"
                    aria-describedby="basic-addon2"
                    // onKeyUp={(e) => handlerSearch(e.target.value)}
                    className='text-black'
                    style={
                        {
                            borderColor: '#E8E8E8'
                        }
                    }
                />
            </InputGroup>
        </>
    )
}

export default ComponentSearchBarTable
