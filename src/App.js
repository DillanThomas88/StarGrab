
import './output.css'
import react, {useState} from 'react';
import Header from './components/header';
import Footer from './components/footer'
import Main from './components/main'
import PlayerCards from './components/playercards';



function App() {



  return (
    <div style={{ height: window.innerHeight }} className="font-default bg-neutral-900  select-none  text-neutral-100 overflow-y-scroll lg:overflow-y-hidden">
      <header className="App-header fixed top-0 w-full z-50">
        {/* <Header /> */}
      </header>
      <main className=" grid  content-start lg:content-center lg:h-full lg:pb-10">
        <div className='grid text-center my-4 md:my-8 lg:my-4'>
          <div className='text-3xl md:text-5xl lg:text-2xl uppercase'>Star Grab</div>
          <div className='text-lg md:text-xl lg:text-lg'>Collect 10 stars to win !</div>

        </div>
        <Main />

        <PlayerCards />


      </main>

      <footer>
        {/* <Footer /> */}
      </footer>

    </div>
  );


}

export default App;
