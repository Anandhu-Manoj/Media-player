import "./App.css";
import { Routes,Route } from "react-router-dom";
import Content from "./Pages/Content";
import Home from "./Pages/Home";
import History from "./Pages/History";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";




function App() {
  return (
    <>
        <Header/>
      <Routes>
        <Route element={< Content/>} path='/'> </Route>
        <Route element={< Home/>} path='/home'> </Route>
        <Route element={< History/>} path='/history'> </Route>


      </Routes>
      <Footer/>
    </>
  );
}

export default App;
