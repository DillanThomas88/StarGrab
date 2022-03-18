import Icon from "../../main/tile/icons"
import react, {useState} from "react"



function Player({props,GetInfo}) {

    return (<>
        {props.data === true &&
            <div className={`player flex justify-between mb-5 md:mb-8 lg:mb-5 absolute ${props.style}`}
                number={props.random}>
                <div className="grid content-center justify-start w-40 md:w-56 lg:w-40">
                    <div className="text-center font-medium text-lg md:text-xl lg:text-lg">{props.name}</div>
                </div>
                <div className="flex justify-end items-center  w-28 md:w-56 lg:w-40">
                    <Icon data={{ desc: 'score' }} />
                    <div className=" text-2xl md:text-4xl lg:text-2xl">= {props.star}</div>
                </div>
            </div>
        }

    </>)
}

export default Player