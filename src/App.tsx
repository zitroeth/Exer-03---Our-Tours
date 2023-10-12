import { useState } from 'react'
import './App.css'
import './index.css'
import {tours} from './tourList.ts'
import Tour from './Tour.tsx'

export default function App() {
  const [interested, setInterested] = useState(tours.length);
  const [refresh, setRefresh] = useState(false);
  
  function onNotInterestedClick(){
    setInterested(interested-1);
  }

  function onRefreshClick(){
    setRefresh(true);
    setInterested(tours.length);
  }

  return (
    <body>
      <div id="root">
        <main>
          <section>
            <div className="title">
              <h2>{(interested>0) ? "our tours" : "no tours left"}</h2>
              <div className="title-underline"></div>
            </div>

            <div className="tours">
              {tours.map(tours =>{
                return (
                    <Tour singleTour={tours} onInterested={onNotInterestedClick} refreshBool={refresh} refreshDone={() =>setRefresh(false)}/>
                );
              })
              }
              {interested===0 && <button className='btn' onClick={onRefreshClick}>Refresh</button>}       
            </div>

          </section>
        </main>
      </div>
    </body>
  )
}
