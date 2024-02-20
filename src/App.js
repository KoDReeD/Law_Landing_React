import { render } from '@testing-library/react';
import Header from './components/ui/header/Header';
import Home from './components/sections/home/Home';
import Director from './components/sections/director/Director';
import './app.css';

export default function App() {
  return (
    <div>
      <div className='home'>
        <Header />
        <Home />
      </div>
      <Director/>
    </div>


  )
}