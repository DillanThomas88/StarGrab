
import './output.css'
import Header from './components/header';
import Footer from './components/footer'
import Main from './components/main'
import Player from './components/main/player';



function App() {


  let player1 = { data: true, title: 'Player 1', name: 'LooseyGoosey'}
  let player2 = { data: true, title: 'Player 2', name: 'CrazyGhost864'}

  return (
    <div style={{ height: window.innerHeight }} className="font-default bg-neutral-800  select-none  text-white 12pro:px-7 overflow-y-scroll">
      <header className="App-header fixed top-0 w-full z-50">
        {/* <Header /> */}
      </header>
      <main className=" grid  content-start mt-5 h-full">
        <div className='grid text-center mb-5'>
          <div className='text-5xl uppercase'>Star Grab</div>
          <div className='text-xl'>Collect 100 stars to win !</div>

        </div>
        <Main />

        <div className='flex flex-between'>
          <div className='w-full grid content-center justify-center mt-5'>
            <Player props={player1} />
            <Player props={player2} />
          </div>
        </div>


      </main>

      <footer>
        {/* <Footer /> */}
      </footer>

    </div>
  );


}

export default App;
