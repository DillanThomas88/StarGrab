
import './output.css'
import react, { useState, useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer'
import Main from './components/main'
import PlayerCards from './components/playercards';
import Icon from './components/icons';
import StarterModal from './components/modals/starter-modal';



function App() {



  const [isModalActive, setModalActive] = useState(() => {
    if(parseInt(localStorage.getItem('user')) !== 0){
      return false
    } else return true
  })
  const [style, setStyle] = useState('animate-slideUp')
  const [highScore, setHighScore] = useState(
    localStorage.getItem('user')
      ? localStorage.getItem('user')
      : localStorage.setItem('user', 0)
  )


  const getColor = () => {
    let x = parseInt(highScore)
    if(x < 50) return 'text-white'
    else if (x >= 50 && x < 75 ) return 'text-green-500'
    else if (x >= 75 && x < 100 ) return 'text-yellow-300'
    else if (x >= 100 && x < 150 ) return 'text-indigo-400'
    else if (x >= 150 && x < 200 ) return 'text-red-400'
    else if (x >= 200 && x < 250 ) return 'text-rose-500'
    else return 'text-pink-400'
  }
  const [starColor, setStarColor] = useState(getColor())
console.log(starColor);
  useEffect(() => {
    if (highScore > localStorage.getItem('user')) {

      localStorage.setItem('user', highScore)
      setStarColor(getColor())
    }
  }, [highScore, starColor])


  const modalFunction = (e) => {
    setModalActive(!isModalActive)
  }

  useEffect(() => {
    document.title = 'Star Grab | downtogame.com'
  }, [])

  return (
    <div style={{ height: window.innerHeight }} className=" font-default bg-neutral-900 select-none  text-neutral-100 overflow-y-scroll lg:overflow-y-hidden">
      {isModalActive && <StarterModal modalFunction={modalFunction} data={style} />}
      <header className="App-header w-full z-50  py-4 flex justify-between px-6">
        {/* <Header /> */}
        <button onClick={(e) => modalFunction(e)}
          className='cursor-pointer'>
          <Icon data={{ desc: 'question' }} type={'text-neutral-600 pointer-events-none'} />
        </button>
        <div className=' text-center text-3xl uppercase flex justify-center items-center'>
          Star
          <div className='relative w-14 h-14 '>
            <div className='absolute grid content-center w-full h-full justify-center text-sm pt-1 font-medium text-neutral-900'>{highScore > 0 && highScore}</div>
            <Icon data={{ desc: 'small' }} type={starColor} />
          </div>
          Grab
        </div>
        <button>
          <Icon data={{ desc: 'menu' }} type={'text-neutral-600 pointer-events-none'} />
        </button>
      </header>
      <main className="relative grid content-start lg:content-center lg:h-full lg:pb-10">


        {/* <div className='font-thin text-sm text-center mb-4'>Collect stars before the timer reaches zero!</div> */}
        <Main setHighScore={setHighScore} highScore={highScore} />

        {/* <PlayerCards /> */}


      </main>

      <footer>
        {/* <Footer /> */}
      </footer>

    </div>
  );


}

export default App;
