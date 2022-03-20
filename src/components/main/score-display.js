
import React, { useEffect, useState } from 'react'
import Icon from '../icons';

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
        <div className='flex justify-between items-center text-xl text-center font-normal px-2 py-1'>
            <div>
                <Icon data={{ desc: 'small' }} type={'w-7 h-7'}/>
            </div>
            <div className='text-center w-5'>=</div>
            <div className={style}>

                <div className=' w-8 text-white text-center'>{count}</div>
            </div>
        </div>
    </>)
}

export default ScoreDisplay