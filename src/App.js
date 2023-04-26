import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Page1 from './features/Pages/Page1';
import Page2 from './features/Pages/Page2';


function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route index path='/' element={<Page1 />}></Route>
        <Route path='/page2' element={<Page2 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
