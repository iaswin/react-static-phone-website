import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Product from './components/Product';
import {Container} from "react-bootstrap";

function App() {
  return (
    <div className='App'>
      <Container>
      <Product/>

      </Container>
      
    </div>
   
    
  );
}

export default App;
