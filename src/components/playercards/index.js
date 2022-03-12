
import React, {useState} from "react"
import Player from "./player"


function PlayerCards({props}){
    let randomnum1 = Math.floor(Math.random()* 14) + 7
    let randomnum2 = Math.floor(Math.random()* 14) + 7
    
    const [player,setplayer] = useState({
        turn: 0,
        player1: { data: true, title: 'Player 1', name: 'LooseyGoosey', random: randomnum1, star: 0},
        player2: { data: true, title: 'Player 2', name: 'CrazyGhost864', random: randomnum2, star: 0}
    })
    
    const GetInfo = () => {
        
        const players = document.querySelectorAll('.player-btn')
        const selected = document.querySelectorAll('.selected')
        
        let total = 0
        let starTotal = 0
        if(!selected.length) {total = 0; starTotal = 0; return}
        else {
            selected.forEach(element => {
                total += parseInt(element.textContent)
            });
            selected.forEach(element => {
                console.log(element.parentElement.parentElement);
                if(element.parentElement.parentElement.getAttribute('star') == 'true') {
                    starTotal++
                }
            });
            console.log(starTotal);

            if(players[player.turn].innerHTML == total ){
                randomnum1 = Math.floor(Math.random()* 14) + 7
                console.log(selected);
                if(!player.turn){
                    setplayer(prevState => ({
                        turn: 1,
                        player1: { 
                            data: true, 
                            title: 'Player 1', 
                            name: 'LooseyGoosey', 
                            random: randomnum1, 
                            star: starTotal + prevState.player1.star,
                        },
                        player2: prevState.player2
                    }))
                } else {
                    setplayer(prevState => ({
                        turn: 0,
                        player1: prevState.player1,
                        player2: { 
                            data: true, 
                            title: 'Player 2', 
                            name: 'CrazyGhost864', 
                            random: randomnum2, 
                            star: starTotal + prevState.player2.star,
                        }
                    }))
                }
            } 

        }


    }


    return (<>
    <div className='flex flex-between'>
          <div className='w-full grid content-center justify-center mt-5'>
            <Player props={player.player1} GetInfo={GetInfo} />
            <Player props={player.player2} GetInfo={GetInfo} />
          </div>
        </div>
    </>)
}

export default PlayerCards