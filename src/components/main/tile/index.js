import React, { useState } from 'react'
import Icon from './icons'

function Tile({ index }) {
    let number = Math.floor(Math.random() * 13 + 1)
    let type = Math.floor(Math.random() * 4 + 1)
    let isLucky = Math.floor(Math.random() * 100)
    console.log('object');

    const getColors = () => {
        switch (type) {
            case 1:
                return {
                    bg: 'bg-gradient-to-tr from-neutral-700 to-neutral-600',
                    text: 'text-neutral-700',
                    border: 'border-neutral-700'
                }
                break;
            case 2:
                return {
                    bg: 'bg-gradient-to-tr from-amber-500 to-amber-400',
                    text: 'text-amber-500',
                    border: 'border-amber-500'
                }
                break;
            case 3:
                return {
                    bg: 'bg-gradient-to-tr from-indigo-500 to-indigo-400',
                    text: 'text-indigo-500',
                    border: 'border-indigo-500'
                }
                break;
            case 4:
                return {
                    bg: 'bg-gradient-to-tr from-rose-500 to-rose-400',
                    text: 'text-rose-500',
                    border: 'border-rose-500'
                }
                break;
    
            default:
                break;
        }
    }
    
    let colorObj = getColors(type)

    return (
        <div
            datanum={number}
            datacolor={type}
            row={index.row}
            col={index.col}
            className={`relative fold-target lg:h-36 lg:w-28  pointer-events-none text-white font-medium  m-1 rounded-md grid text-3xl`}>
            <div className='absolute h-full w-full'>
                <div className={` ${colorObj.bg} overflow-hidden border-4 border-neutral-200 shadow shadow-lg grid h-full w-full content-between  rounded-md `}>
                    <div className="mx-2 flex justify-between items-center text-center">
                        <div>{number}</div>
                        {isLucky < 5 && <Icon index={number} type={colorObj} data={{ desc: 'small' }} />}
                    </div>
                    <div className="relative flex justify-center ">
                        {isLucky < 5 && <>
                        <Icon index={number} type={colorObj} data={{ desc: 'large' }} />
                        <Icon data={{desc:'detail'}} />
                        </>}
                    </div>
                    <div className="mx-2 rotate-180 flex justify-between items-center">
                        {number}
                        {isLucky < 5 && <Icon index={number} type={colorObj} data={{ desc: 'small' }} />}
                    </div>
                </div>
            </div>
            <div className=' absolute w-full h-full'>
                <div className={` bg-gradient-to-tr from-neutral-300 to-neutral-200 overflow-hidden grid h-full w-full justify-center content-center border-2 border-white rounded-md `}>
                <Icon index={number} type={colorObj} data={{ desc: 'background' }} />
                </div>

            </div>
        </div>
    )
}

export default Tile