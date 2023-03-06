import './App.css';
import './css/main.css'
import Header from './components/Header';
import MenuBtn from './components/MenuBtn';
import Content from './components/Content';

function App() {
  return (
    <body>
    <Header/>
    <main>
      <MenuBtn/>
      <Content/>
    </main>
    </body>
  );
}

export default App;
