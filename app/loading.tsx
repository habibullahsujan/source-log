'use client'
import React from 'react'
import { LineWave } from 'react-loader-spinner'

const LoadingPage = () => {
    return (
        <div className='flex items-center justify-center h-full w-full'>
            <LineWave
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="line-wave-loading"
                wrapperStyle={{}}
                wrapperClass=""
                firstLineColor=""
                middleLineColor=""
                lastLineColor=""
            />
        </div>
    )
}

export default LoadingPage