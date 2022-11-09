import {Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './componants/Home';
import Product from './componants/Product';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/Product">Product</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product' element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default App;
