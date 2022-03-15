import React, { useState, useEffect } from 'react'
import Tile from './tile'
import Icon from './tile/icons'
import Player from '../playercards/player'

function Main() {

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


    const [state, setstate] = useState({
        randomNum: Math.floor(Math.random() * 13) + 7,
        total: 0
    })
    const HandleCounter = () => {
        const selectedTiles = document.querySelectorAll('.selected')
        let total = 0
        selectedTiles.forEach(element => {
            let parent = element.parentElement.parentElement
            total += parseInt(parent.getAttribute('datanum'))
        });
        let color = {
            text: 'text-neutral-500',
            bg: 'bg-neutral-700 '
        }
        if (total == state.randomNum) {
            color = {
                color: 'text-red-500',
                bg: 'bg-neutral-100'
            }
        }
        return (
            <div className={` ${color.text}  flex justify-between items-center text-2xl md:text-4xl lg:text-2xl`}>
                <div className='flex justify-start items-center'>
                    <div className='w-14 lg:w-10 text-center'>{state.randomNum}</div>
                    {total !== state.randomNum
                        ? <Icon data={{ desc: 'notequal' }} />
                        : <Icon data={{ desc: 'equal' }} type={color} />
                    }
                    <div className='w-14 lg:w-10 text-center'>{!selectedTiles.length ? state.total : total}</div>
                </div>
                <button disabled={total !== state.randomNum ? true : false} className={`${color.bg} w-40 lg:w-28 rounded-md px-4 py-2 uppercase text-neutral-900 `}>
                    {total !== state.randomNum
                        ? 'grab'
                        : 'Grab'
                    }
                </button>
            </div>
        )
    }

    const handleSelected = (e) => {

        const tile = e.target
        const childData = e.target.children[0]
        const border = tile.children[0].children[0].children[0]
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

            let colors = getColors(parseInt(childData.getAttribute('datacolor')))


            if (!border.classList.contains('selected')) {

                if (!selectObj.color) {
                    selectObj.color = childData.getAttribute('datacolor')
                }

                // ! apply style
                let x = childData.children[0].children[0].children[0]
                border.classList.toggle('border-neutral-600')
                border.classList.toggle(colors.border)
                border.classList.toggle(colors.bg)
                border.classList.toggle('selected')
                border.classList.toggle('animate-select')
                let t = setInterval(() => {
                    clearInterval(t)
                    border.classList.toggle('animate-select')
                }, 200);

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

            } else if (border.classList.contains('selected')) {


                const o = selectObj.array.filter(data => {
                    // console.log(data.row + obj.row, data.col + obj.col);
                    return data.row + data.col != obj.row + obj.col
                })
                selectObj.array = o
                if (!selectObj.array.length) { selectObj.total = 0 }
                // console.log(selectObj);


                // ! apply style
                let x = childData.children[0].children[0].children[0]

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

    const handleFoldingAnimations = (e) => {
        e.target.parentElement.classList.toggle('animate-fadeOut')
        e.target.parentElement.classList.toggle('pointer-events-none')

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
        <div
            className="grid relative  content-center justify-center w-screen">
            <div className='z-30 absolute grid content-center justify-center w-full h-full pb-20'>
                {/* <div className='z-30 fixed top-0 w-full h-full bg-black opacity-50'>
                </div> */}

                <button className='z-50 text-xl  uppercase bg-gradient-to-tr from-neutral-100 to-white rounded-3xl shadow-lg flex items-center shadow-black  text-neutral-900 px-4 py-2 h-12 w-36'
                    onClick={(e) => handleFoldingAnimations(e)}>
                    <div className='mr-2'>start</div>
                    <Icon data={{ desc: 'play' }} type={'text-neutral-800'} />
                </button>

            </div>

            <div onClick={(e) => handleSelected(e)} className={`the-board grid ${rows, cols} gap-1 md:gap-2 lg:gap-1 relative`}>
                {tiles.map((data, index) => {
                    return (
                        <div className='tile' key={index} >
                            {data}
                        </div>
                    )
                })}

            </div>

            <div className='rounded-lg py-2 mt-5 font-semibold'>
                <div>
                    {HandleCounter()}
                </div>
            </div>


        </div>
    )
}

export default Main