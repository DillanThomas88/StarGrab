import React, { useState, useEffect } from 'react'
import Tile from '../tile'
import Icon from '../icons'
import Player from '../playercards/player'
import Timer from './timer-display'
import ScoreDisplay from './score-display'

function Main({setHighScore, highScore}) {

    const gridSize = 5
    const rows = 'grid-rows-5'
    const cols = 'grid-cols-5'



    const board = () => {
        let board = []
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                board.push(<Tile index={{ row: i, col: j }} />)
            }
        }
        return board
    }
    const [tiles, settiles] = useState(board())
    const [timer, setTimer] = useState('pause')
    const [collection, setCollection] = useState(0)
    const [state, setstate] = useState({
        randomNum: Math.floor(Math.random() * 15) + 10,
        total: 0
    })


    const getColors = (type) => {
        switch (type) {
            case 1:
                return {
                    bg: 'bg-green-500',
                    text: 'text-green-500',
                    border: 'border-green-500'
                }
                break;
            case 2:
                return {
                    bg: 'bg-yellow-300',
                    text: 'text-yellow-300',
                    border: 'border-yellow-300'
                }
                break;
            case 3:
                return {
                    bg: 'bg-indigo-400',
                    text: 'text-indigo-400',
                    border: 'border-indigo-400'
                }
                break;
            case 4:
                return {
                    bg: 'bg-red-500',
                    text: 'text-red-500',
                    border: 'border-red-500'
                }
                break;

            default:
                break;
        }
    }

    const handleNewCards = () => {
        let queryTiles = Array.from(document.querySelectorAll('.tile'))
        let selected = document.querySelectorAll('.selected')
        let alltiles = queryTiles.map(data => data.children[0])
        let board = []
        let starTotal = collection
        alltiles.forEach((element, index) => {
            let row = parseInt(element.getAttribute('row'))
            let col = parseInt(element.getAttribute('col'))
            let color = getColors(parseInt(element.getAttribute('datacolor')))
            if (element.children[0].children[0].classList.contains('selected')) {
                applyremoveStyle(element.parentElement, 'remove')
                board.push(<Tile index={{ row: row, col: col }} />)

                if (element.getAttribute('star') === 'true') { starTotal += parseInt(element.getAttribute('datanum')) }
            }
            else { board.push(tiles[index]) }

        });
        settiles(board)
        setCollection(starTotal)
        HandleCounter('reset')

    }

    const handleLocalStorage = () => {
        if(collection > highScore){

            setHighScore(collection)
        }
    }

    const HandleCounter = (x) => {
        let tally = 0
        const selectedTiles = document.querySelectorAll('.selected')
        selectedTiles.forEach(element => {
            let parent = element.parentElement.parentElement
            tally += parseInt(parent.getAttribute('datanum'))
        });
        // setTotal(total)
        if (x === 'reset') {
            setstate({
                randomNum: Math.floor(Math.random() * 15) + 10,
                total: 0
            })
        }
        let color = {
            text: 'text-neutral-600',
            bg: 'bg-neutral-700 '
        }
        if (tally == state.randomNum) {
            color = {
                color: 'text-red-500',
                bg: 'bg-neutral-100'
            }
        }
        const handletimerReset = () => {
            setTimer('pause')
        }

        return (<>

            <div className={`text-xl font-normal`}>

                <div className='flex justify-between my-4'>

                    <div className='text-neutral-500 flex flex-col justify-start items-center '>
                        <Timer data={{ timer, handletimerReset }} handleLocalStorage={handleLocalStorage} handleFoldingAnimations={handleFoldingAnimations} />

                    </div>
                    <div className='relative w-20'>

                        <button onClick={handleNewCards}
                            disabled={tally !== state.randomNum ? true : false}
                            className={`absolute z-40 w-full h-full flex flex-col rounded-lg flex justify-start items-center bg-white text-neutral-900 mb-1`}>
                            <div className='border-b border-neutral-600 text-sm opacity-80'>{tally}</div>

                            <div className='w-full text-center text-4xl'>{state.randomNum}</div>
                        </button>
                        <div className={`${tally === state.randomNum && 'animate-collect'} absolute top-0 w-full h-full pointer-events-none bg-transparent border border-white rounded-lg z-10 mb-1`}></div>

                    </div>
                    <div className={`flex text-neutral-600 h-16 flex-col justify-start items-start `}>
                        <div className='flex border border-neutral-700 rounded-lg'>
                            <ScoreDisplay score={collection} />

                        </div>
                        <div className='text-sm  text-neutral-600 text-center w-full'>Stars</div>
                    </div>
                </div>
            </div>
        </>
        )
    }

    const handleSelected = (e) => {

        const tile = e.target
        const childData = tile.children[0]
        const border = childData.children[0].children[0]
        // console.log(border);
        const selectedTiles = document.querySelectorAll('.selected')
        const tilePackage = []
        selectedTiles.forEach(element => {
            let parent = element.parentElement.parentElement
            tilePackage.push({
                number: parseInt(parent.getAttribute('datanum')),
                color: parseInt(parent.getAttribute('datacolor')),
                row: parseInt(parent.getAttribute('row')),
                col: parseInt(parent.getAttribute('col')),
                star: parent.getAttribute('star'),
            })
        });
        let selectObj = {
            color: undefined,
            array: tilePackage,
            total: 0,
        }
        if (tilePackage.length) {
            selectObj.total = 0
            tilePackage.forEach(element => {
                // console.log(element);
                selectObj.total += element.number
            });

        }


        if (tile.classList.contains('tile')) {
            let obj = {
                number: parseInt(childData.getAttribute('datanum')),
                color: parseInt(childData.getAttribute('datacolor')),
                row: parseInt(childData.getAttribute('row')),
                col: parseInt(childData.getAttribute('col')),
                star: childData.getAttribute('star'),
            }

            if (!selectObj.array.length) {
                selectObj.color = obj.color
            } else { selectObj.color = selectObj.array[0].color }

            // ! color check
            if (selectObj.color != obj.color) return

            // console.log(selectObj.total, obj.number);
            selectObj.total += obj.number
            // console.log(selectObj.total, obj.number);



            if (!border.classList.contains('selected')) {

                if (!selectObj.color) {
                    selectObj.color = childData.getAttribute('datacolor')
                }

                // ! apply style
                applyremoveStyle(tile, 'apply')

            } else if (border.classList.contains('selected')) {


                const o = selectObj.array.filter(data => {
                    // console.log(data.row + obj.row, data.col + obj.col);
                    return data.row + data.col != obj.row + obj.col
                })
                selectObj.array = o
                if (!selectObj.array.length) { selectObj.total = 0 }
                // console.log(selectObj);


                // ! apply style
                applyremoveStyle(tile, 'remove')

            }

            // console.log(selectObj.array);
            if (selectObj.array.length === 0) selectObj.color = undefined
            // console.log(selectObj.array);

            // ! calculate scoreing obj

            selectObj.array.forEach(element => {
                selectObj.total += element.number
            });
            setstate(data => ({
                randomNum: data.randomNum,
                total: selectObj.total
            }))

        }


    }

    const handleFoldingAnimations = () => {

        let b = document.querySelector('.board')
        b.classList.toggle('animate-fadeOut')
        b.classList.toggle('pointer-events-none')

        let t = setInterval(() => {
            clearInterval(t)
            setTimer('start')
        }, 1500);

        const cards = document.querySelectorAll('.fold-target')
        const getRows = () => {
            let temp = []
            let array = []
            for (let i = 0; i < cards.length; i++) {
                temp.push(cards[i])
                if (temp.length === gridSize) {
                    array.push(temp)
                    temp = []
                }
            } return array
        }
        let rows = getRows()

        const styles = {
            top: 'absolute h-full w-full animate-foldOut',
            bottom: 'absolute h-full w-full animate-foldIn',
        }

        let i = 0

        const staggerFolding = (element, j) => {
            let timer = setInterval(() => {
                clearInterval(timer)
                element[j].children[0].classList.toggle('animate-foldIn')
                element[j].children[1].classList.toggle('animate-foldOut')

                j++
                if (j >= gridSize) { return }
                staggerFolding(element, j)
            }, 100);
        }


        const staggerRows = (array, i) => {
            let timer = setInterval(() => {
                clearInterval(timer)
                staggerFolding(array[i], 0)
                i++
                if (i >= gridSize) { return }
                staggerRows(array, i)
            }, 100);
        }

        staggerRows(rows, i)

    }


    return (
        <div className="grid content-center justify-center w-screen">

            <div className='relative'>
                <div onClick={() => handleFoldingAnimations()}
                    className='board z-40 text-xl absolute uppercase grid content-center justify-center w-full h-full'>

                    <div className='text-sm font-bold px-4 py-2 pointer-events-none'>
                        <div className='animate-pulse z-50 '>Touch Screen to start</div>
                        {/* <div className='w-full h-14 flex justify-center'>
                            <Icon data={{ desc: 'lock' }} />
                        </div> */}

                    </div>
                </div>
                <div className='grid w-full justify-center content-center'>
                    <div onClick={(e) => handleSelected(e)}
                        className={`the-board grid ${rows, cols} gap-1 md:gap-2 lg:gap-1 relative`}>
                        {tiles.map((data, index) => {
                            return (<div className='tile' key={index} >{data}</div>)
                        })}
                    </div>
                </div>
            </div>

            <div className='py-1 font-semibold'>
                {HandleCounter()}
            </div>



        </div>
    )

    function applyremoveStyle(tile, z) {
        console.log(tile);
        let childData = tile.children[0]
        let x = childData.children[0].children[0].children[0]
        // console.log(childData);
        let border = childData.children[0].children[0]
        let colors = getColors(parseInt(childData.getAttribute('datacolor')))

        if (z === 'apply') {

            border.classList.toggle('border-neutral-600')
            border.classList.toggle(colors.border)
            border.classList.toggle(colors.bg)
            border.classList.toggle('selected')
            border.classList.toggle('animate-select')
            let t = setInterval(() => {
                clearInterval(t)
                border.classList.toggle('animate-select')
            }, 200)

            if (childData.getAttribute('star') == 'true') {
                x.classList.toggle('text-neutral-900')
                x.classList.toggle(colors.text)
                x.children[0].classList.toggle('text-neutral-700')
                x.children[0].classList.toggle('text-neutral-900')
                x.children[1].classList.toggle(colors.text)
                x.children[1].classList.toggle('text-neutral-900')
            } else {
                x.classList.toggle('text-neutral-900')
                border.classList.toggle('text-white')
            }
        } else if (z === 'remove') {



            border.classList.toggle(colors.border)
            border.classList.toggle('border-neutral-600')
            border.classList.toggle(colors.bg)
            border.classList.toggle('selected')
            border.classList.toggle('animate-select')
            let t = setInterval(() => {
                clearInterval(t)
                border.classList.toggle('animate-select')
            }, 200);

            if (childData.getAttribute('star') == 'true') {
                x.classList.toggle(colors.text)
                x.classList.toggle('text-neutral-900')
                x.children[0].classList.toggle('text-neutral-900')
                x.children[0].classList.toggle('text-neutral-700')
                x.children[1].classList.toggle('text-neutral-900')
                x.children[1].classList.toggle(colors.text)
            } else {
                border.classList.toggle('text-white')
                x.classList.toggle('text-neutral-900')
            }
        }
    }
}

export default Main