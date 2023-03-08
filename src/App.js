import './App.css';
import './css/main.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import MenuBtn from './components/MenuBtn';
import Content from './components/Content';

function App() {
  return (
    <>
      <Header/>
      <main>
        <MenuBtn/>
        <Routes>
          <Route index element={<Content cat={"html"}/>}/>
          <Route path="/html" element={<Content cat={"html"}/>}/>
          <Route path="/css" element={<Content cat={"css"}/>}/>
          <Route path="/javascript" element={<Content cat={"javascript"}/>}/>
          <Route path="/react" element={<Content cat={"react"}/>}/>
          <Route path="/headless-cms" element={<Content cat={"headless-cms"}/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
