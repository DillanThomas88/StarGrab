import React, { useState } from 'react'
import Tile from './tile'
import Icon from './tile/icons'
import Player from '../playercards/player'

function Main() {

    const gridSize = 6




    const board = () => {
        let board = []
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                board.push(<Tile index={{ row: i, col: j }}/>)
            }
        }
        return board
    }

    
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
                    bg: 'bg-indigo-500',
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
    let selectObj = {
        color: undefined,
        bg: undefined,
        array: [],
        total: 0,
    }
    const handleSelected = (e) => {
        const tile = e.target
        const childData = e.target.children[0]
        const border = tile.children[0].children[0].children[0]


        
        
        if (tile.classList.contains('tile')) {
            let obj = {
                row: childData.getAttribute('row'),
                col: childData.getAttribute('col'),
                number: parseInt(childData.getAttribute('datanum')),
                star: 0
            }
            let colors = getColors(parseInt(childData.getAttribute('datacolor')))
            if (childData.getAttribute('star') === 'true') obj.star = obj.number


            if (!border.classList.contains('selected')) {

                if (!selectObj.color) {
                    selectObj.color = childData.getAttribute('datacolor')
                }
                // ! return
                if (selectObj.color !== childData.getAttribute('datacolor')) return
                else {
                    selectObj.array.push(obj)
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
                
                if(childData.getAttribute('star') == 'true'){
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
                    console.log(data.row + obj.row, data.col + obj.col);
                    return data.row + data.col != obj.row + obj.col
                })
                selectObj.array = o
                console.log(selectObj);


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
                
                if(childData.getAttribute('star') == 'true'){
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

            console.log(selectObj.array);
            if (selectObj.array.length  === 0) selectObj.color = undefined
            console.log(selectObj.array);

            // ! calculate scoreing obj
            selectObj.total = 0
            selectObj.array.forEach(element => {
                selectObj.total += element.number
            });

            const players = document.querySelectorAll('.player-btn')
            const buttons = document.querySelectorAll('.collect-btn')
            if (parseInt(players[0].innerHTML) === selectObj.total) {
                buttons[0].classList.toggle('animate-collect')

            } else {
                if (buttons[0].classList.contains('animate-collect')) {
                    buttons[0].classList.toggle('animate-collect')
                }
            }

            // console.log(selectObj);
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
        console.log(rows);
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
            className="grid  content-center justify-center w-screen">
            <div onClick={(e) => handleSelected(e)} className=" grid grid-rows-6 grid-cols-6 gap-1 md:gap-2 lg:gap-1">
                {board().map((data, index) => {
                    return (
                        <div className='tile' key={index} >
                            {data}
                        </div>
                    )
                })}
            </div>
            <div className='z-30 fixed grid content-center justify-center w-full  h-full top-0'>
                {/* <div className='z-30 fixed top-0 w-full h-full bg-black opacity-50'>
                </div> */}

                <button className='z-50 text-5xl bg-gradient-to-tr from-neutral-100 to-white rounded-3xl shadow-lg shadow-black'
                    onClick={(e) => handleFoldingAnimations(e)}>
                    <Icon data={{ desc: 'play' }} type={'text-neutral-800'} />
                </button>

            </div>
        </div>
    )
}

export default Main