import './App.css';
import ListTodosComponent from './components/ListTodosComponent';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <BrowserRouter>
    <div>
      <HeaderComponent/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<ListTodosComponent/>}/>
            <Route path="/todos" element={<ListTodosComponent/>}/>
          </Routes>
        </div>
        <FooterComponent/>
      </div>
    </BrowserRouter>
  );
}

export default App;
