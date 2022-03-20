
import './output.css'
import react, { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer'
import Main from './components/main'
import PlayerCards from './components/playercards';
import Icon from './components/icons';
import StarterModal from './components/modals/starter-modal';



function App() {

  const [isModalActive, setModalActive] = useState(true)
  const [style, setStyle] = useState('animate-slideUp')


  const modalFunction = (e) => {
    setModalActive(!isModalActive)
  }

  return (
    <div style={{ height: window.innerHeight }} className=" font-default bg-neutral-900 select-none  text-neutral-100 overflow-y-scroll lg:overflow-y-hidden">
      {isModalActive && <StarterModal modalFunction={modalFunction} data={style} />}
      <header className="App-header w-full z-50  py-4 flex justify-between px-6">
        {/* <Header /> */}
      <button onClick={(e) => modalFunction(e)}
        className='w-8 h-8 cursor-pointer'>
        <Icon data={{ desc: 'question' }} type={'text-neutral-600 pointer-events-none'} />
      </button>
      <div className=' text-center text-3xl uppercase flex justify-center items-center'>
        Star
        <div className='w-7 h-7 '>
          <Icon data={{ desc: 'small' }} />
        </div>
        Grab
      </div>
      <button>
      <Icon data={{ desc: 'menu' }} type={'text-neutral-600 pointer-events-none'} />
      </button>
      </header>
      <main className="relative grid content-start lg:content-center lg:h-full lg:pb-10 mt-6">


        {/* <div className='font-thin text-sm text-center mb-4'>Collect stars before the timer reaches zero!</div> */}
        <Main />

        {/* <PlayerCards /> */}


      </main>

      <footer>
        {/* <Footer /> */}
      </footer>

    </div>
  );


}

export default App;
