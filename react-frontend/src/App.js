import './App.css';
import ListTodosComponent from './components/ListTodosComponent';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<ListTodosComponent/>}/>
          <Route path="/todos" element={<ListTodosComponent/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
