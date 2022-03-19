
import './output.css'
import react, { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer'
import Main from './components/main'
import PlayerCards from './components/playercards';
import Icon from './components/main/tile/icons';



function App() {



  return (
    <div style={{ height: window.innerHeight }} className="font-default bg-neutral-900 select-none  text-neutral-100 overflow-y-scroll lg:overflow-y-hidden">
      <header className="App-header w-full z-50 mb-4">
        <Header />
      </header>
      <main className=" grid content-start lg:content-center lg:h-full lg:pb-10">
        <div className='text-center text-3xl uppercase flex justify-center items-center h-12'>
          Star
          <div className='w-7 '>

            <Icon data={{ desc: 'small' }} />
          </div>
          Grab
        </div>
        <div className='font-thin text-sm text-center mb-4'>Collect stars before the timer reaches zero!</div>
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
