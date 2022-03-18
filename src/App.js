
import './output.css'
import react, {useState} from 'react';
import Header from './components/header';
import Footer from './components/footer'
import Main from './components/main'
import PlayerCards from './components/playercards';
import Icon from './components/main/tile/icons';



function App() {



  return (
    <div style={{ height: window.innerHeight }} className="font-default bg-neutral-900 select-none  text-neutral-100 overflow-y-scroll lg:overflow-y-hidden">
      <header className="App-header w-full z-50 mb-5">
        <Header />
      </header>
      <main className=" grid  content-start lg:content-center lg:h-full lg:pb-10">

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
