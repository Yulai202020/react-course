import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TikTakToe from "./components/TikTakToe";
import ChessGame from "./components/ChessGame";
import PageNotFound from "./components/PageNotFound";

import UseStateObject from "./components/UseStateObject";
import UseStateExample from "./components/UseStateExample";
import Parent from "./components/Parent";

import Controler from "./components/Controler";
import Navigation from "./components/Navigation";
import UseRefExample from "./components/UseRefExample";

import "./styles/app.scss";

function App() {
  return (
    <>
    <Navigation />
    <Router>
      <Routes>
        <Route path="/" element={<TikTakToe />}/>
        <Route path="/chess" element={<ChessGame />}/>

        <Route path="/controler" element={<Controler />}/>
        <Route path="/parent" element={<Parent />}/>
        <Route path="/usestateobject" element={<UseStateObject />}/>
        <Route path="/usestateexample" element={<UseStateExample />}/>
        <Route path="/userefexample" element={<UseRefExample />}/>

        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;