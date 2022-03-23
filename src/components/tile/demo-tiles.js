import React, { useState } from 'react'
import Icon from '../icons'

function DemoTiles({ index, isDark }) {

    const getColors = () => {
        switch (index.type) {
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
                    text: 'text-amber-500',
                    border: 'border-amber-500'
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

    let colorObj = getColors(index.type)
    console.log();

    return (
        <div
            datanum={index.number}
            datacolor={index.type}
            star={index.star}
            className={`relative fold-target h-10 w-10 md:h-24 md:w-24 lg:h-12 lg:w-12 pointer-events-none ${colorObj.text} font-bold rounded-md grid  text-xl`}>
            <div className='absolute h-full w-full'>
                <div className={` overflow-hidden border md:border-4 lg:border-2 border-neutral-600  h-full w-full rounded-sm md:rounded-md lg:rounded-sm`}>
                    {index.star !== "true"
                        ? <>
                            <div className={`relative grid content-center justify-center text-center h-full`}>
                                {index.number}
                            </div>
                        </>
                        : <>
                            <div className={`relative grid content-center justify-center font-medium text-center text-neutral-900 h-full`}>
                                <Icon data={{desc: 'detail'}} />
                                <Icon data={{desc: 'large'}} type={colorObj.text} />
                                <div className={isDark ? 'z-10 pt-1 text-lg' : 'z-10 pt-1 text-lg text-white'}>{index.number}</div>
                            </div>

                        </>}
                </div>
            </div>
        </div>
    )
}

export default DemoTiles