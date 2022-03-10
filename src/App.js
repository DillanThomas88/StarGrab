
import './output.css'
import Header from './components/header';
import Footer from './components/footer'
import Main from './components/main'
import Player from './components/main/player';



function App() {




  return (
    <div style={{ height: window.innerHeight }} className="bg-neutral-800 grid content-between justify-center select-none  text-white 12pro:px-7">
      <header className="App-header fixed top-0 w-full z-50">
        {/* <Header /> */}
      </header>
      <main style={{ height: window.innerHeight }} className=" grid  content-center h-full">

        <div className='rotate-180'>
          <Player props={{ data: true }} />
        </div>

        <Main />

        <div>
          <Player props={{ data: true }} />
        </div>

      </main>

      <footer>
        {/* <Footer /> */}
      </footer>

    </div>
  );


}

export default App;
