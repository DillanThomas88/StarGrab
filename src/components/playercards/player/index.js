import Icon from "../../main/tile/icons"
import react, {useState} from "react"



function Player({props,GetInfo}) {

    return (<>
        {props.data === true &&
            <div className="player flex justify-between mb-5 md:mb-8 lg:mb-5"
                number={props.random}>
                <div className="grid content-center justify-start w-40 md:w-56 lg:w-40">
                    <div className="text-center mb-1 font-thin text-sm md:text-lg lg:text-sm">{props.title}</div>
                    <div className="text-center font-medium text-lg md:text-xl lg:text-lg">{props.name}</div>
                </div>
                <div
                    className="relative text-neutral-700 font-semibold text-2xl md:text-5xl lg:text-2xl border border-white rounded-lg md:rounded-xl text-center flex items-center justify-center w-12 h-12 md:w-20 md:h-20 lg:w-12 lg:h-12">
                    <div className="collect-btn w-full h-full bg-white rounded-lg md:rounded-xl lg:rounded-lg"
                        onClick={() => GetInfo()}
                    ></div>
                    <div className="player-btn absolute pointer-events-none flex items-center justify-center rounded-lg md:rounded-xl lg:rounded-lg h-full w-full scale-110 bg-neutral-100">{props.random}</div>
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