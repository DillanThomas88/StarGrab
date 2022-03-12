import Icon from "../tile/icons"



function Player({
    props,
}) {
    // console.log(props);
    // console.log(props);
    let randomnumber = Math.floor(Math.random() * 14) + 7

    return (<>
        {props.data === true &&
            <div className="player flex justify-between mt-5"
                number={randomnumber}>
                <div className="grid content-center justify-center w-80">
                    <div className="text-center mb-1 font-thin text-lg">{props.title}</div>
                    <div className="text-center font-medium text-xl">{props.name}</div>
                </div>
                <div
                    className="relative  text-neutral-700 font-semibold text-6xl border border-white rounded-xl text-center flex items-center justify-center w-20 h-20">
                    <div className="collect-btn w-full h-full bg-white  rounded-xl"></div>
                    <div className="player-btn absolute flex items-center justify-center rounded-xl h-full w-full scale-110 bg-neutral-100">{randomnumber}</div>
                </div>
                <div className="flex justify-center items-center w-80">
                    <Icon data={{ desc: 'score' }} />
                    <div className="text-4xl">= 0</div>
                </div>
            </div>
        }

    </>)
}

export default Player