
import './output.css'
import react, {useState} from 'react';
import Header from './components/header';
import Footer from './components/footer'
import Main from './components/main'
import PlayerCards from './components/playercards';



function App() {



  return (
    <div style={{ height: window.innerHeight }} className="font-default bg-neutral-800  select-none  text-white overflow-y-scroll">
      <header className="App-header fixed top-0 w-full z-50">
        {/* <Header /> */}
      </header>
      <main className=" grid  content-start">
        <div className='grid text-center my-4'>
          <div className='text-3xl sm:text-5xl uppercase'>Star Grab</div>
          <div className='text-lg sm:text-xl'>Collect 10 stars to win !</div>

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
