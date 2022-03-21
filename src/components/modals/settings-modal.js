import React, { useState } from 'react';
import Icon from '../icons';
import Toggle from '../tools/toggle/toggle';


function SettingsModal({ modalFunction, isDark, animation, data }) {


    return (
        <>
            <div className='fixed animate-fadeIn w-full px-4 h-full z-50 flex justify-center items-center'>
                <div className={`flex flex-col question-modal ${animation} relative justify-start items-center w-full rounded-md border border-neutral-600 h-fit pb-5 bg-neutral-900 shadow-md shadow-black text-xs px-4`}>
                    <button onClick={modalFunction} className='w-6 h-6 absolute right-2 top-2 cursor-pointer'>
                        <Icon data={{ desc: 'close' }} />
                    </button>

                    <header className='mt-6 mb-2 w-full flex justify-center items-center uppercase font-normal text-2xl text-neutral-100 rounded-t-sm '>
                        Settings
                    </header>
                    <div className='w-full flex justify-between items-center'>
                        {/* <div className='border-b w-full opacity-40'></div> */}
                    </div>
                    <div className='flex justify-center w-full items-center border-b mb-4'></div>

                    {/* toggles */}
                    <div className='flex flex-col justify-center w-full text-xl font-normal'>
                        <div className=' flex justify-between w-full'>
                            <div >Dark Theme</div>
                            <Toggle isDark={isDark} data={'dark-mode'} />
                        </div>
                        <div className='flex justify-center w-full items-center border-b opacity-20 my-2'></div>

                        <div className='flex justify-between w-full'>
                            <div >Hard Mode</div>
                            <Toggle isDark={isDark} />
                        </div>
                    </div>



                </div>
                <div className='fixed w-full h-full bg-black opacity-50 -z-10'></div>

            </div>
        </>
    )

}

export default SettingsModal