import React, { useState, useEffect } from 'react';
import Icon from '../icons';

const Timer = ({ data, handleFoldingAnimations, handleLocalStorage, isDark, setIsDisabled }) => {


    let timerLength = 120
    const [seconds, setSeconds] = useState({
        sec: timerLength,
        milli: '00'
    });

    const [isActive, setIsActive] = useState(false);
    function toggle() {
        setIsActive(!isActive);
    }
    if (data.timer === 'start' && isActive === false) {
        toggle()
    }

    function reset() {
        setSeconds({
            sec: timerLength,
            milli: '00'
        });
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                let x = seconds.milli
                let y = seconds.sec
                let t = document.querySelectorAll('.timer')
                let b = document.querySelector('.timer-border')

                x--
                if (x < 10 && x >= 0) {
                    setSeconds(data => ({
                        sec: data.sec,
                        milli: '0' + x
                    }))
                } else if (x < 0) {
                    y--

                    if (y <= 10 && y >= 0 && y % 2 === 0) {
                        t.forEach(element => {
                            element.classList.toggle('text-red-500')
                            element.classList.toggle('font-semibold')
                        });
                        if(isDark){
                            b.classList.toggle('border-neutral-500')
                            b.classList.toggle('border-red-500')
                            b.classList.toggle('bg-neutral-800')
                        } else {
                            b.classList.toggle('border-neutral-500')
                            b.classList.toggle('border-red-500')
                            b.classList.toggle('bg-red-100')
                        }
                    } else if (y <= 10 && y >= 0 && y % 2 !== 0) {
                        t.forEach(element => {
                            element.classList.toggle('text-red-500')
                            element.classList.toggle('font-semibold')
                        });

                        if(isDark){
                            b.classList.toggle('border-neutral-500')
                            b.classList.toggle('border-red-500')
                            b.classList.toggle('bg-neutral-800')
                        } else {
                            b.classList.toggle('border-neutral-500')
                            b.classList.toggle('border-red-500')
                            b.classList.toggle('bg-red-100')
                        }
                    }

                    if (y < 10 && y >= 0) {

                        setSeconds(data => ({
                            sec: '0' + data.sec - 1,
                            milli: 99
                        }))
                    } else if (y < 0) {
                        t.forEach(element => {
                            element.classList.toggle('text-red-500')
                            element.classList.toggle('font-semibold')
                        });
                        if(isDark){
                            b.classList.toggle('border-neutral-500')
                            b.classList.toggle('border-red-500')
                            b.classList.toggle('bg-neutral-800')
                        } else {
                            b.classList.toggle('border-neutral-500')
                            b.classList.toggle('border-red-500')
                            b.classList.toggle('bg-red-100')
                        }
                        data.handletimerReset()
                        // handleFoldingAnimations('end')
                        handleLocalStorage()
                        setIsDisabled(true)
                        toggle()
                        reset()
                    } else {
                        setSeconds(data => ({
                            sec: data.sec - 1,
                            milli: 99
                        }))
                    }
                } else {
                    setSeconds(data => ({
                        sec: data.sec,
                        milli: x
                    }))
                }
            }, 10);

        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <div className={`text-neutral-500 flex flex-col justify-center items-center`}>
            <div className='px-2 py-1 border timer-border border-neutral-500 rounded-md flex '>
                <div className='w-8 text-center timer'>{seconds.sec}</div>
                <div className='w-5  text-center timer '>:</div>
                <div className='w-8 text-center  timer'>{seconds.milli}</div>
            </div>
            <div className='text-sm'>Timer</div>

        </div>
    );
};

export default Timer;