import React from 'react'
import Maps from 'images/map.png'
import './Map.scss'

type Props = {}

const Map = (props: Props) => {
    return (
        <>
            <div className='imgmap'>
                <img src={Maps} alt="" />
            </div>
        </>
    )
}

export default Map