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
import UsingCustomHook from "./components/UsingCustomHook";
import UseEffectExample from "./components/UseEffectExample";

function App() {
  return (
    <>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<TikTakToe />}/>
        <Route path="/chess" element={<ChessGame />}/>

        <Route path="/controler" element={<Controler />}/>
        <Route path="/parent" element={<Parent />}/>
        <Route path="/usestateobject" element={<UseStateObject />}/>
        <Route path="/usestateexample" element={<UseStateExample />}/>
        <Route path="/userefexample" element={<UseRefExample />}/>
        <Route path="/usingcustomhook" element={<UsingCustomHook />}/>
        <Route path="/useeffectexample" element={<UseEffectExample />}/>

        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;