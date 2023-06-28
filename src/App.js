
import { HashRouter, Route ,Routes} from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar.tsx'
import Invoicepage from './invoice/page.tsx'
import SalarySlip from './SalarySlip/page.tsx'
import BussinessCard from './BusinessCard/page.tsx'
import BusinessName from './BusinessName/page.tsx'
function App() {
  return (
    <>
    <HashRouter>
   {/* <Navbar /> */}
   <Routes>
    <Route path='/invoice' element={<Invoicepage />} />
    <Route path='/SalarySlip' element={<SalarySlip />} />
    <Route path='/BusinessCard' element={<BussinessCard />} />
    <Route path='/BusinessName' element={<BusinessName />} />
    




   </Routes>
   </HashRouter>
   </>
  );
}

export default App;
