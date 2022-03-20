import React, { useState, useEffect } from 'react';
import Icon from '../icons';

const Timer = ({data}) => {


    let timerLength = 120
    const [seconds, setSeconds] = useState({
        sec: timerLength,
        milli: '00'
    });

    const [isActive, setIsActive] = useState(false);
    function toggle() {
        setIsActive(!isActive);
    }
    if(data.timer === 'start' && isActive === false){
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
                
                t.forEach(element => {
                    
                    if(!element.classList.contains('text-white')){
                        element.classList.toggle('text-white')
                    }
                });
                x--
                if (x < 10 && x >= 0) {
                    setSeconds(data => ({
                        sec: data.sec,
                        milli: '0' + x
                    }))
                } else if (x < 0) {
                    y--

                    if(y<= 10 && y >=0 && y%2 === 0){
                        t.forEach(element => {                    
                            if(!element.classList.contains('text-red-400')){
                                element.classList.toggle('text-white')
                                element.classList.toggle('text-red-400')
                            }
                        });
                    } else if (y<= 10 && y >=0 && y%2 !== 0){
                        t.forEach(element => {                    
                            if(element.classList.contains('text-red-400')){
                                element.classList.toggle('text-red-400')
                                element.classList.toggle('text-white')
                            }
                        });
                    }
                    
                    if (y < 10 && y >= 0) {

                        setSeconds(data => ({
                            sec: '0' + data.sec - 1,
                            milli: 99
                        }))
                    } else if (y < 0) {
                        t.forEach(element => {
                    
                            if(element.classList.contains('text-red-400')){
                                element.classList.toggle('text-red-400')
                            }
                        });
                        data.handletimerReset()
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
        <div className={` flex flex-col justify-center items-center`}>
            <div className='px-2 py-1 border border-neutral-700 rounded-md flex '>
                <div className='w-8 text-center timer'>{seconds.sec}</div>
                <div className='w-5  text-center timer opacity-50'>:</div>
                <div className='w-8 text-center  timer opacity-50'>{seconds.milli}</div>
            </div>
            <div className='text-sm timer opacity-50'>Timer</div>

        </div>
    );
};

export default Timer;