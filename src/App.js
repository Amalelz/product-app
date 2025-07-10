import logo from './logo.svg';
import './App.css';
import SearchProduct from './components/SearchProduct';
import AddProduct from './components/AddProduct';
import Delete from './components/Delete';

function App() {
  return (
    <div>
      <AddProduct/>
      < SearchProduct/>
      <Delete/>
    </div>
  );
}

export default App;
