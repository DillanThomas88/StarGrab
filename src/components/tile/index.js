import React, { useState } from 'react'
import Icon from '../icons'

function Tile({ index }) {
    let number = Math.floor(Math.random() * 13 + 1)
    let type = Math.floor(Math.random() * 4 + 1)
    let isLucky = Math.floor(Math.random() * 100)
    let chance = 15

    const getColors = () => {
        switch (type) {
            case 1:
                return {
                    bg: 'bg-gradient-to-tr from-neutral-700 to-neutral-600',
                    text: 'text-green-500',
                    border: 'border-green-500'
                }
                break;
            case 2:
                return {
                    bg: 'bg-gradient-to-tr from-amber-500 to-amber-400',
                    text: 'text-yellow-300',
                    border: 'border-yellow-300'
                }
                break;
            case 3:
                return {
                    bg: 'bg-gradient-to-tr from-indigo-500 to-indigo-400',
                    text: 'text-indigo-400',
                    border: 'border-indigo-400'
                }
                break;
            case 4:
                return {
                    bg: 'bg-gradient-to-tr from-rose-500 to-rose-400',
                    text: 'text-red-500',
                    border: 'border-red-500'
                }
                break;

            default:
                break;
        }
    }

    let colorObj = getColors(type)
    console.log();

    return (
        <div
            datanum={number}
            datacolor={type}
            row={index.row}
            col={index.col}
            star={isLucky <= chance ? 'true' : 'false'}
            className={`relative fold-target h-16 w-16 md:h-24 md:w-24 lg:h-12 lg:w-12 pointer-events-none ${colorObj.text} font-bold rounded-md grid  text-3xl md:text-5xl lg:text-3xl`}>
            <div className='absolute h-full w-full'>
                <div className={` overflow-hidden border-2 md:border-4 lg:border-2 border-neutral-600  h-full w-full rounded-sm md:rounded-md lg:rounded-sm`}>
                    {isLucky > chance
                        ? <>
                            <div className={`relative grid content-center justify-center text-center h-full`}>
                                {number}
                            </div>
                        </>
                        : <>
                            <div className={`relative grid content-center justify-center text-center text-neutral-900 h-full`}>
                                <Icon data={{desc: 'detail'}} />
                                <Icon data={{desc: 'large'}} type={colorObj.text} />
                                <div className='z-10 pt-2 lg:pt-0 text-2xl md:text-3xl lg:text-xl'>{number}</div>
                            </div>

                        </>}
                </div>
            </div>
            <div className='z-10 absolute w-full h-full pointer-events-none'>
                <div className={`${colorObj.text} bg-neutral-900 overflow-hidden grid h-full w-full justify-center content-center border-2 border-neutral-700 rounded-sm md:rounded-md lg:rounded-sm `}>
                    <Icon index={number} type={'text-neutral-800'} data={{ desc: 'background' }} />
                </div>

            </div>
        </div>
    )
}

export default Tile