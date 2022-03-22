import React, { useState } from "react"

function Toggle({ isDark, data, setIsDark }) {
    const [toggle, setToggle] = useState(() => {
        
        if(isDark === true && data === 'dark-mode'){
            return true
        } else return false
        
    })

    const handleToggle = () => {
        setToggle(!toggle)
        if(data === 'dark-mode') {
            console.log(toggle);
            setIsDark(!toggle)
            window.location.reload();
        }
        
    }

    return (<>
        <div onClick={handleToggle}
        className={`relative h-6 w-12 ${toggle ? 'bg-green-400' : isDark ? 'bg-white' : 'bg-neutral-800'} rounded-full`}>
            <div style={{pointerEvents: 'none'}} className={toggle ? 'float-right' : 'toggle-left'}>
                <div className={`h-6 w-6 scale-90 rounded-full ${isDark ? 'bg-neutral-900' : 'bg-white'}`}></div>
            </div>


        </div>

    </>)
}

export default Toggle