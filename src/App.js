import './App.css';
import './css/main.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import MenuBtn from './components/MenuBtn';
import Content from './components/Content';
import resources from './ressurser';

function App() {
  return (
    <>
    <body>
      <Header/>
      <main>
        <MenuBtn/>
        <Routes>
          <Route index element={<Content cat={resources[0].category}/>}/>
          <Route path="/html" element={<Content cat={resources[0].category}/>}/>
          <Route path="/css" element={<Content cat={resources[1].category}/>}/>
          <Route path="/javascript" element={<Content cat={resources[2].category}/>}/>
          <Route path="/react" element={<Content cat={resources[3].category}/>}/>
          <Route path="/sanity" element={<Content cat={resources[4].category}/>}/>
        </Routes>
      </main>
    </body>
    </>
  );
}

export default App;
