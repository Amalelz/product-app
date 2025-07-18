import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './components/View';
import Frontpage from './components/Frontpage';
import Add from './components/Add';
import Search from './components/Search';
import Delete from './components/Delete';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Frontpage/>} />
    <Route path='/view' element={<View/>} />
    <Route path='/add' element={<Add/>} />
    <Route path='/search' element={<Search/>} />
    <Route path='/delete' element={<Delete/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
