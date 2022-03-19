
import React, { useEffect, useState } from 'react'
import Icon from './tile/icons'

function ScoreDisplay({ score }) {

    const [count, setCount] = useState(score)
    const [style, setStyle] = useState('')
    const [isActive, setIsActive] = useState(false);
    function toggle() {
        setIsActive(!isActive);
    }

    if (score > count && isActive === false) {
        toggle()
    }

    useEffect(() => {
        let interval = null
        let x = count

        if (isActive) {
            setStyle('animate-grab')
            interval = setInterval(() => {
                // clearInterval(interval)
                if (x !== score) {
                    x++
                    console.log(x, score);
                    setCount(data => data + 1)

                } else {
                    clearInterval(interval)
                    toggle()
                    setStyle('')
                }
                // clearInterval(interval)

            }, 60);
        } else if (!isActive && score === x) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, score]);



    return (<>
        <div className='flex w-24 justify-between px-4 py-1 text-xl text-center font-normal'>
            <div className='w-5 flex justify-center items-center'>

                <Icon data={{ desc: 'small' }} />
            </div>
            <div>=</div>
            <div className={style}>

                <div className=' w-4 text-white'>{count}</div>
            </div>
        </div>
    </>)
}

export default ScoreDisplay