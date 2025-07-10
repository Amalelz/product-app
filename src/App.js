import logo from './logo.svg';
import './App.css';
import SearchProduct from './components/SearchProduct';
import AddProduct from './components/AddProduct';
import Delete from './components/Delete';
import ProductView from './components/ProductView';

function App() {
  return (
    <div>
      <AddProduct/>
      < SearchProduct/>
      <Delete/>
      <ProductView/>
    </div>
  );
}

export default App;
