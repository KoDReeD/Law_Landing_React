import { render } from '@testing-library/react';
import Header from './components/ui/header/Header';
import Home from './components/sections/home/Home';
import Director from './components/sections/director/Director';
import './app.css';
import Advantages from './components/sections/advantages/Advantages';
import Specialists from './components/sections/specialists/Specialists';
import Partner from './components/sections/partner/Partner';

export default function App() {
  return (
    <div>
      <div className='home'>
        <Header />
        <Home />
      </div>
      <Director />
      <Advantages />
      <Specialists />
      <Partner/>
    </div>


  )
}