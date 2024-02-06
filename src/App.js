import CovidWorld from './components/CovidWorld';
import CovidCountry from './components/CovidCountry';
import bg from './images/bg.png';

function App() {
  return (
    <>
    <div style={{backgroundImage:`url(${bg})`, backgroundColor:"black", color:"white", height:"100vh",overflowY:"scroll"}}>
      <CovidWorld/>
      <CovidCountry/>
    </div>
    </>
  );
}

export default App;
