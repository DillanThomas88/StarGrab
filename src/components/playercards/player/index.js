import Icon from "../../main/tile/icons"
import react, {useState} from "react"



function Player({props,GetInfo}) {

    return (<>
        {props.data === true &&
            <div className="player flex justify-between mt-5"
                number={props.random}>
                <div className="grid content-center justify-center w-44 lg:w-80">
                    <div className="text-center mb-1 font-thin text-sm lg:text-lg">{props.title}</div>
                    <div className="text-center font-medium text-lg lg:text-xl">{props.name}</div>
                </div>
                <div
                    className="relative text-neutral-700 font-semibold text-2xl lg:text-6xl border border-white rounded-lg lg:rounded-xl text-center flex items-center justify-center w-12 h-12 lg:w-20 lg:h-20">
                    <div className="collect-btn w-full h-full bg-white rounded-lg lg:rounded-xl"
                        onClick={() => GetInfo()}
                    ></div>
                    <div className="player-btn absolute pointer-events-none flex items-center justify-center rounded-lg lg:rounded-xl h-full w-full scale-110 bg-neutral-100">{props.random}</div>
                </div>
                <div className="flex justify-center items-center  w-36 lg:w-80">
                    <Icon data={{ desc: 'score' }} />
                    <div className=" text-2xl lg:text-4xl">= {props.star}</div>
                </div>
            </div>
        }

    </>)
}

export default Player