
import "./App.css";
import Register from './components/register.jsx'
import Login from './components/login.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './components/navigation.jsx';
import Car from './components/card.jsx';
import Bot from './components/bottom.jsx';
import Con from './components/content.jsx';
import Caro from './components/carousel.jsx';


function App() {
  return(
    <>
    <div>
    <Navi />
    <Caro />
    <Con />
    <Car />
    
    
    <Bot />
    </div>

    </>
  )
 
}

export default App
