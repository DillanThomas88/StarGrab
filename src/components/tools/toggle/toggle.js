import React, { useState } from "react"

function Toggle({ isDark }) {


    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (<>
        <div onClick={handleToggle}
        className={`relative h-5 w-10 ${toggle ? 'bg-green-400' : isDark ? 'bg-white' : 'bg-neutral-900'} rounded-full`}>
            <div style={{pointerEvents: 'none'}} className={toggle ? 'float-right' : 'toggle-left'}>
                <div className={`h-5 w-5 scale-90 rounded-full ${isDark ? 'bg-neutral-900' : 'bg-white'}`}></div>
            </div>


        </div>

    </>)
}

export default Toggle