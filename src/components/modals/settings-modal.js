import React, { useState, useEffect } from 'react';
import Icon from '../icons';
import Toggle from '../tools/toggle/toggle';


function SettingsModal({ modalFunction, isDark, animation, data, setIsDark, playerData }) {

    const getStyle = () => {
        if (isDark) return 'bg-neutral-900'
        else return 'bg-white text-neutral-900'
    }
    const [style, setstyle] = useState(getStyle())

    useEffect(() => {
        setstyle(getStyle())
    }, [isDark])

    return (
        <div>
            <div className={`fixed animate-fadeIn w-full px-4 h-full z-50 flex justify-center items-center`}>
                <div className={`flex ${style}  flex-col question-modal ${animation} relative justify-start items-center w-full rounded-md border border-neutral-500 h-fit shadow-md shadow-black text-xs px-4 pb-2`}>
                    <button onClick={modalFunction} className='w-6 h-6 absolute right-2 top-2 cursor-pointer'>
                        <Icon data={{ desc: 'close' }} />
                    </button>

                    <header className='mt-6 mb-2 w-full flex justify-center items-center uppercase font-normal text-2xl  rounded-t-sm '>
                        Settings
                    </header>
                    <div className='w-full flex justify-between items-center'>
                        {/* <div className='border-b w-full opacity-40'></div> */}
                    </div>
                    <div className='flex justify-center w-full items-center border-b border-neutral-500 mb-4'></div>

                    {/* toggles */}
                    <div className='flex flex-col justify-center w-full text-xl font-normal'>
                        <div className=' flex justify-between w-full'>
                            <div >Dark Theme</div>
                            <Toggle isDark={isDark} data={'dark-mode'} setIsDark={setIsDark} />
                        </div>
                        <div className='flex justify-center w-full items-center border-b border-neutral-500 opacity-20 my-2'></div>

                        <div className='flex justify-between w-full'>
                            <div >Hard Mode</div>
                            <Toggle isDark={isDark} />
                        </div>
                        <div className='flex justify-center w-full items-center border-b border-neutral-500 opacity-20 my-2'></div>
                        <div className='w-full text-sm pt-1 '>
                            <div className='flex justify-end items-center text-neutral-500 '>
                                <div className='w-5 h-5 flex items-center justify-center pt-1 mr-2 '>

                                    <Icon data={{ desc: 'score' }} type={' animate-swivel'} />
                                </div> 
                                
                                <div className=' text-sm'>

                                {playerData.totalstars.toLocaleString()}
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
                <div className='fixed w-full h-full bg-black opacity-50 -z-10'></div>

            </div>
        </div>
    )

}

export default SettingsModal