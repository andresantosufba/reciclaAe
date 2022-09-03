import './App.css';
import Routes from './routes';
import Navbar from './components/navbar';
import Updates from './components/updates/index'


function App() {
  return (
    <>
      
      <div className="App-container">
        <div className='featured-post'>
        
          <Routes />

        </div>
      
      
        <div className='updates'>
          <Updates />
        </div>


      </div>
    </>
  );

}

export default App;
