import {BrowserRouter , Route ,Routes} from 'react-router-dom'
import EmpListing from './Axios-CURD/EmpListing';
import EmpCreate from './Axios-CURD/EmpCreate';
import EmpDetail from './Axios-CURD/EmpDetail';
import EmpEdit from './Axios-CURD/EmpEdit';
function App() {
  return (
    <div className="App">
      <h1>React CURD operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />} />
          <Route path='/employee/create' element={<EmpCreate />} />
          <Route path='/employee/detail/:empid' element={<EmpDetail />} />
          <Route path='/employee/edit/:empid' element={<EmpEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
