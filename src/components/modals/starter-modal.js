
import React, { useState } from 'react';
import Icon from '../icons';
import DemoTiles from '../tile/demo-tiles'


function StarterModal({ modalFunction, animation, css, isDark }) {


  const tileArray = [
    {
      type: 2,
      number: 3,
      star: "false",
    },
    {
      type: 3,
      number: 6,
      star: "false",

    },
    {
      type: 4,
      number: 2,
      star: "false",

    },
    {
      type: 2,
      number: 12,
      star: "true",

    },
    {
      type: 1,
      number: 7,
      star: "false",

    },
    {
      type: 1,
      number: 11,
      star: "false",

    },
    {
      type: 4,
      number: 13,
      star: "false",

    },
    {
      type: 1,
      number: 4,
      star: "true",

    },
    {
      type: 2,
      number: 11,
      star: "false",

    },
  ]

  return (
    <>
      <div className={` fixed animate-fadeIn w-full px-4 h-full z-50 flex justify-center items-center`}>
        <div className={`flex flex-col ${css} question-modal ${animation} relative justify-start items-center w-full rounded-md border border-neutral-500 h-fit pb-5  shadow-md shadow-black text-xs px-4`}>
          <button onClick={modalFunction} className='w-7 h-7 absolute right-2 top-2 cursor-pointer'>
            <Icon data={{ desc: 'close' }} />
          </button>

          <header className='mt-6 mb-2 w-full flex justify-center items-center uppercase font-normal text-2xl  rounded-t-sm '>
            How To Play
          </header>
          <div className='w-full flex justify-between items-center'>
            {/* <div className='border-b w-full opacity-40'></div> */}
          </div>
          <div className='flex justify-center w-full items-center border-b border-neutral-500 opacity-20'></div>
          <div className='my-2'>Collect as many star tiles before the time runs out !</div>
          <p className='font-normal mt-2'>
            A <span className='font-bold'>target number</span> is given
          </p>
          <div className={isDark ? 'w-7 my-2 h-7 flex justify-center items-center text-lg font-semibold bg-white text-neutral-900 rounded-sm ' : 'w-7 my-2 h-7 flex justify-center items-center text-lg font-semibold bg-neutral-900 text-white rounded-sm '}>
            15
          </div>
          <div className='mt-2 font-normal text-center'>Add tiles of the <span className='font-semibold text-amber-500'>same color</span> to equal<span className='font-semibold'> target number</span></div>

          <p className=' text-center font-normal'>After tiles are selected, tap the<span className='font-semibold'> target number</span></p>
          <div className='flex justify-center items-center mt-2'>
            <div className={isDark ? 'w-7 h-7 mr-2 flex justify-center items-center text-lg font-semibold bg-amber-500 rounded-sm text-neutral-900' : 'w-7 h-7 mr-2 flex justify-center items-center text-lg font-semibold bg-amber-500 rounded-sm text-white'}>
              3
            </div>
            <div className={isDark ? 'w-7 h-7 mr-2 flex justify-center items-center text-lg font-semibold bg-amber-500 rounded-sm text-neutral-900' : 'w-7 h-7 mr-2 flex justify-center items-center text-lg font-semibold bg-amber-500 rounded-sm text-white'}>
              12
            </div>
            <div className='flex justify-center items-center mx-2'>=</div>
            <div className={isDark ? 'relative w-7 my-2 h-7 flex justify-center items-center text-lg font-semibold bg-white text-neutral-900 rounded-sm ' : 'relative w-7 my-2 h-7 flex justify-center items-center text-lg font-semibold bg-neutral-900 text-white rounded-sm '}>
              15
              <div className='absolute w-full h-full bg-transparent rounded-sm border border-neutral-500 animate-collect'></div>
            </div>
          </div>


          <div className='mt-2'>
            <div className='font-normal text-center'>
              Only tiles with <span className='font-semibold'> Stars</span>  count towards your overall score
            </div>
          </div>


          <div className='border-b border-neutral-500 w-full mt-2 opacity-20'></div>


          <p className='mt-4'>Example</p>
          <div className='w-full flex flex-col justify-center items-center'>

            <div className='grid grid-rows-3 grid-cols-3 gap-1 mt-2'>
              {tileArray.map((data, index) => {
                return <DemoTiles index={data} key={index} isDark={isDark} />
              })}
            </div>

            <div className='flex my-2'>
              <div className='flex justify-center items-center text-3xl pb-1 px-2 font-normal'>-</div>
              <div className={isDark ? 'w-7 my-2 h-7 flex justify-center items-center text-lg font-semibold bg-white text-neutral-900 rounded-sm ' : 'w-7 my-2 h-7 flex justify-center items-center text-lg font-semibold bg-neutral-900 text-white rounded-sm '}>
                15
              </div>
              <div className='flex justify-center items-center text-3xl pb-1 px-2 font-normal'>-</div>
            </div>
          </div>

        </div>
        <div className='fixed w-full h-full bg-black opacity-50 -z-10'></div>

      </div>
    </>
  )

}

export default StarterModal