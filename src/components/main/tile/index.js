import React, { useState } from 'react'
import Icon from './icons'

function Tile({ index }) {
    let number = Math.floor(Math.random() * 13 + 1)
    let type = Math.floor(Math.random() * 4 + 1)
    let isLucky = Math.floor(Math.random() * 100)

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
            star={isLucky <= 5 ? 'true' : 'false'}
            className={`relative fold-target h-14 w-14 lg:h-28 lg:w-28 pointer-events-none text-white font-normal rounded-md grid  text-2xl lg:text-7xl`}>
            <div className='absolute h-full w-full'>
                <div className={` ${colorObj.bg} overflow-hidden border-2 lg:border-4 border-neutral-200  h-full w-full rounded-sm lg:rounded-md `}>
                    {isLucky > 5
                        ? <>
                            <div className="relative grid content-center justify-center text-center h-full">
                                {number}
                            </div>
                        </>
                        : <>
                            <div className={`relative grid content-center justify-center text-center ${colorObj.text} h-full`}>
                                <Icon data={{desc: 'large'}} />
                                <Icon data={{desc: 'detail'}} />
                                <div className='z-10 pt-1 text-xl lg:text-4xl font-bold'>{number}</div>
                            </div>

                        </>}
                </div>
            </div>
            <div className='z-10 absolute w-full h-full pointer-events-none'>
                <div className={` bg-gradient-to-tr from-neutral-300 to-neutral-200 overflow-hidden grid h-full w-full justify-center content-center border-2 border-white rounded-md `}>
                    <Icon index={number} type={colorObj} data={{ desc: 'background' }} />
                </div>

            </div>
        </div>
    )
}

export default Tile