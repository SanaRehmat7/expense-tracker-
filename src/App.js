// import React, { useEffect } from 'react';
import { BrowserRouter} from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from 'react-popups';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
          <TooltipComponent content='Settings' position='Top' >
          <i class="fa-solid fa-gear"></i>
          </TooltipComponent>
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
