import React from 'react'
import Skeleton from 'react-loading-skeleton'


export default function ComponentSkeletonAuth() {
    return (
        <>
            <div className="mb-4">
                <Skeleton count={1} width={'40%'}/>
                <Skeleton count={1} height={35}/>
            </div>
            <div className="mb-6">
                <Skeleton count={1} width={'40%'}/>
                <Skeleton count={1} height={35}/>
            </div>
            <div className='float-right mt-2.5' style={{ 'width': '40%' }}>
                <Skeleton count={1} width={'100%'}/>
            </div>
            <div className='d-inline-block' style={{ 'width': '40%' }}>
                <Skeleton count={1} width={'100%'} height={35}/>
            </div>
        </>
    )
}
