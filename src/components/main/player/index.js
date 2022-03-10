import Icon from "../tile/icons"



function Player({ props }) {

    let yourNumber = (Math.floor(Math.random() * 13) + 7)
    let theirNumber = (Math.floor(Math.random() * 13) - 7)
    return (<>
        {props.data === true &&
            <div className=" my-10 mx-56 flex justify-between items-center">
                <div
                    className=" bg-gradient-to-t from-neutral-200 to-neutral-100 text-neutral-700 font-semibold text-6xl border border-white rounded-xl text-center flex items-center justify-center w-20 h-20">
                    {yourNumber}
                </div>
                <div className="flex justify-center items-center opacity-80">
                    <Icon data={{ desc: 'score' }} />
                    <div className="text-4xl">= 0</div>
                </div>
            </div>
        }

    </>)
}

export default Player