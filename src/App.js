
import './output.css'
import React, { useState, useEffect } from 'react';
import Main from './components/main'
import Icon from './components/icons';
import StarterModal from './components/modals/starter-modal';
import SettingsModal from './components/modals/settings-modal';



function App() {

  let userObj = { highScore: 0, darkMode: false, totalstars: 0 }
  let styleObj = {
    light: {
      icon: 'text-neutral-800',
      style: 'bg-white text-neutral-700'
    },
    dark: {
      icon: 'text-white',
      style: 'bg-neutral-900 text-white'
    }
  }

  const [playerData, setPlayerData] = useState(
    localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : localStorage.setItem('user', JSON.stringify(userObj))
  )
  const [styles, setStyles] = useState('')
  const [isDark, setIsDark] = useState(() => {
    if (!playerData) {
      setStyles(styleObj.light)
      return false
    }
    else return playerData.darkMode
  })
  const [isSettingsActive, setSettingsActive] = useState(false)
  const [animation, setStyle] = useState('animate-slideUp')
  const [highScore, setHighScore] = useState(() => {
    if (!playerData) return 0
    else return playerData.highScore
  })
  const [isModalActive, setModalActive] = useState(() => {
    if (highScore !== 0) {
      return false
    } else return true
  })
  const getColor = () => {
    let x = highScore
    if (x < 50) return styles.icon
    else if (x >= 50 && x < 75) return 'text-yellow-500'
    else if (x >= 75 && x < 100) return 'text-green-500'
    else if (x >= 100 && x < 150) return 'text-teal-400'
    else if (x >= 150 && x < 200) return 'text-sky-500'
    else if (x >= 200 && x < 250) return 'text-fuchsia-500'
    else return 'text-rose-500'
  }
  const [starColor, setStarColor] = useState(getColor())


  useEffect(() => {
    if (highScore > playerData.highScore) {
      playerData.highScore = highScore
      localStorage.setItem('user', JSON.stringify(playerData))
      setStarColor(getColor())
    }


    // ! if players played during beta
    if (!playerData.totalstars) {
      playerData.totalstars = playerData.highScore
    }
    // !


    playerData.darkMode = isDark
    localStorage.setItem('user', JSON.stringify(playerData))
  }, [highScore, starColor, isDark, playerData])

  const modalFunction = (e) => {

    const el = e.target

    if (el.classList.contains('modal')) {
      if (el.classList.contains('question')) {
        return setModalActive(!isModalActive)
      } else if (el.classList.contains('settings')) {
        // console.log('settings');
        return setSettingsActive(!isSettingsActive)
      } else {
        console.log('error');
      }
      return
    }

    let array = [
      {
        state: isModalActive,
        function: setModalActive
      },
      {
        state: isSettingsActive,
        function: setSettingsActive
      }
    ]

    array.forEach(element => {
      if (element.state === true) {
        element.function(false)
        return
      }
    });
  }

  useEffect(() => {
    document.title = 'Star Grab | downtogame.com'
  }, [])

  console.log();

  return (
    <div className={isDark ? styleObj.dark.style : styleObj.light.style}>
      <div className={` font-default  select-none overflow-y-scroll lg:overflow-y-hidden`}
        style={{ height: window.innerHeight }}>
        {isModalActive &&
          <StarterModal

            modalFunction={modalFunction}
            animation={animation}
            isDark={isDark}
            css={isDark ? styleObj.dark.style : styleObj.light.style} />}

        {isSettingsActive &&
          <SettingsModal

            modalFunction={modalFunction}
            animation={animation}
            isDark={isDark}
            setIsDark={setIsDark}
            playerData={playerData} />}
            
        {renderHeader()}
        {renderMain()}
      </div>
        

    </div>
  );



  function renderMain() {
    return <main className="relative grid content-start lg:content-center lg:h-full lg:pb-10">
      <Main setHighScore={setHighScore} highScore={highScore} isDark={isDark} css={isDark ? styleObj.dark.style : styleObj.light.style} setPlayerData={setPlayerData} />
    </main>;
  }

  function renderHeader() {

    return <header className="App-header w-full z-50  py-4 flex justify-between px-6">

      {renderQuestionIcon()}
      {renderTitle()}
      {renderSettingsIcon()}

    </header>;

    function renderSettingsIcon() {
      return <button onClick={(e) => modalFunction(e)}
        className='modal settings pointer-cursor'>
        <Icon data={{ desc: 'menu' }} type={' pointer-events-none'} />
      </button>;
    }

    function renderTitle() {
      return <div className=' text-center text-3xl uppercase flex justify-center items-center'>
        Star
        <div className='relative w-14 h-14 '>
          <div className='absolute grid content-center w-full h-full justify-center text-sm pt-1 font-medium '>
            <div className={isDark ? 'text-neutral-900' : 'text-white'}>
              {highScore > 0 && highScore}
            </div>
          </div>
          <Icon data={{ desc: 'small' }} type={starColor} />
        </div>
        Grab
      </div>;
    }

    function renderQuestionIcon() {
      return <button onClick={(e) => modalFunction(e)}
        className='modal question cursor-pointer'>
        <Icon data={{ desc: 'question' }} type={' pointer-events-none'} />
      </button>;
    }
  }
}

export default App;
