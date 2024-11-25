
import './App.css'
import Orderhistory from './components/Orderhistory'
import Sidebar from './components/Sidebar'
import Themetoggle from './components/Themetoggle'
import Topbar from './components/Topbar'
import Totalbalance from './components/Totalbalance'
import { Provider } from 'react-redux';
import store from './redux/store'
import MetricsCard from './components/MetricsCard'
import MostTraded from './components/MostTraded'
import Notification from './components/Notification'
import ProfitDaily from './components/ProfitDaily'
import StatsDaily from './components/StatsDaily'

function App() {


  return (
    <>
        <Provider store={store}>
        <div className="flex h-screen">
      <Sidebar/>
      <div className="flex-1 p-5 bg-gray-100 dark:bg-gray-900">
       <Topbar/>
       {/* <Themetoggle/> */}
      
         <div className="p-4 bg-gray-100 min-h-screen">
      {/* First Row */}
      <div className="grid grid-cols-2 gap-4 mb-4">
      <Totalbalance/>
        <div>
          <ProfitDaily />
          <MostTraded />
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-2 gap-4 mb-4">
     <StatsDaily/>
     <Notification />
      </div>

      {/* Third Row */}
      <Orderhistory/>
    </div>
      </div>
    </div>
   
        </Provider>
    
     
    </>
  )
}

export default App
