import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TikTakToe from "./components/TikTakToe";
import ChessGame from "./components/ChessGame";
import PageNotFound from "./components/PageNotFound";

import UseStateObj from "./components/UseStateObj";
import UseStateExample from "./components/UseStateExample";
import Images from "./components/Images";

import "./styles/app.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TikTakToe />}/>
        <Route path="/chess" element={<ChessGame />}/>

        <Route path="/images" element={<Images />}/>
        <Route path="/usestateobj" element={<UseStateObj />}/>
        <Route path="/usestateexample" element={<UseStateExample />}/>

        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </Router>
  )
}

export default App;