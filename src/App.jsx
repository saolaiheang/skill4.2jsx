import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

export default function Root() {
  return (
    <>
      <div className='container'>
        <Header />
        <div className='mains'>
          <Sidebar />
          <div id="detail">
            <Outlet />
          </div>
        </div>
      </div>

    </>
  );
}