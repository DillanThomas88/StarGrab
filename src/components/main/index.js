import React, { useState } from 'react'
import Tile from './tile'
import Icon from './tile/icons'
import Player from '../playercards/player'

function Main() {

    const gridSize = 6


    const board = () => {
        let key = 0
        let board = []
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {

                board.push(
                    <div className='tile'>
                        <Tile index={{ row: i, col: j }} key={key} />
                    </div>
                )
                key++
            }
        }
        return board
    }

    let selectObj = {
        color: undefined,
        array: [],
        total: 0,
    }
    const handleSelected = (e) => {
        const tile = e.target
        const chilData = e.target.children[0]
        const border = tile.children[0].children[0].children[0]
        // console.log(chilData.getAttribute('datacolor'));

        if (tile.classList.contains('tile')) {
            let obj = {
                row: chilData.getAttribute('row'),
                col: chilData.getAttribute('col'),
                number: parseInt(chilData.getAttribute('datanum')),
                star: 0
            }
            if (chilData.getAttribute('star') === 'true') obj.star = obj.number

            if (border.classList.contains(`lg:rounded-md` || 'rounded-sm')) {

                if (!selectObj.color) {
                    selectObj.color = chilData.getAttribute('datacolor')
                }
                // ! return
                if (selectObj.color !== chilData.getAttribute('datacolor')) return
                else {
                    selectObj.array.push(obj)
                }

                // ! apply style
                console.log(window.innerWidth);
                if(window.innerWidth > 400){
                    border.classList.toggle(`lg:rounded-md`)
                    border.classList.toggle(`lg:rounded-full`)
                    border.classList.toggle('animate-select')
                    border.classList.toggle('selected')

                } else{
                    console.log(window.innerWidth);
                    border.classList.toggle(`rounded-sm`)
                    border.classList.toggle(`rounded-full`)
                    border.classList.toggle('animate-select')
                    border.classList.toggle('selected')
                }

            } else if (border.classList.contains(`lg:rounded-full` || 'rounded-full')) {

                // console.log(selectObj.array);
                const o = selectObj.array.filter(data => {
                    return data.row + data.col != obj.row + obj.col
                })
                selectObj.array = o
                // console.log(selectObj.array);
                if (selectObj.array.length === 0) selectObj.color = undefined

                // ! apply style
                if(window.innerWidth > 400){
                    border.classList.toggle(`lg:rounded-full`)
                    border.classList.toggle(`lg:rounded-md`)
                    border.classList.toggle('animate-select')
                    border.classList.toggle('selected')

                } else{
                    border.classList.toggle(`rounded-full`)
                    border.classList.toggle(`rounded-md`)
                    border.classList.toggle('animate-select')
                    border.classList.toggle('selected')
                }
            }

            // ! calculate scoreing obj
            selectObj.total = 0
            selectObj.array.forEach(element => {
                selectObj.total += element.number
            });

            const players = document.querySelectorAll('.player-btn')
            const buttons = document.querySelectorAll('.collect-btn')
            if(parseInt(players[0].innerHTML) === selectObj.total){
                buttons[0].classList.toggle('animate-collect')

            } else {
                if(buttons[0].classList.contains('animate-collect')){
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
        const rows = getRows()
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
            <div onClick={(e) => handleSelected(e)} className=" grid grid-rows-6 grid-cols-6 gap-1 lg:gap-2">
                {board()}
            </div>
            <div className='z-30 fixed grid content-center justify-center w-full  h-full top-0'>
                <div className='z-30 fixed top-0 w-full h-full bg-black opacity-50'>
                </div>

                <button className='z-50 text-5xl border-2 bg-gradient-to-tr from-rose-600 to-rose-500 shadow-lg shadpw-neutra;-500  px-4 py-2 rounded-3xl shadow-sl shadow-black'
                    onClick={(e) => handleFoldingAnimations(e)}>
                    <Icon data={{ desc: 'play' }} />
                </button>

            </div>
        </div>
    )
}

export default Main