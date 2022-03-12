import Icon from "../../main/tile/icons"
import react, {useState} from "react"



function Player({props,GetInfo}) {

    return (<>
        {props.data === true &&
            <div className="player flex justify-between mb-5"
                number={props.random}>
                <div className="grid content-center justify-start w-40 sm:w-80">
                    <div className="text-center mb-1 font-thin text-sm sm:text-lg">{props.title}</div>
                    <div className="text-center font-medium text-lg sm:text-xl">{props.name}</div>
                </div>
                <div
                    className="relative text-neutral-700 font-semibold text-2xl sm:text-6xl border border-white rounded-lg sm:rounded-xl text-center flex items-center justify-center w-12 h-12 sm:w-20 sm:h-20">
                    <div className="collect-btn w-full h-full bg-white rounded-lg sm:rounded-xl"
                        onClick={() => GetInfo()}
                    ></div>
                    <div className="player-btn absolute pointer-events-none flex items-center justify-center rounded-lg sm:rounded-xl h-full w-full scale-110 bg-neutral-100">{props.random}</div>
                </div>
                <div className="flex justify-end items-center  w-28 sm:w-80">
                    <Icon data={{ desc: 'score' }} />
                    <div className=" text-2xl sm:text-4xl">= {props.star}</div>
                </div>
            </div>
        }

    </>)
}

export default Player