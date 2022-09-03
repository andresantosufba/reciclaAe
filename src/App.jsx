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

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62205.33333050427!2d-38.47946242325123!3d-12.98250963841926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604d976c3ae79%3A0x4ce9ffd1c4bf12cc!2sCOOPCICLA!5e0!3m2!1sen!2sbr!4v1662216496330!5m2!1sen!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
    </>
  );

}

export default App;
