import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/Banner";
import Menubar from "./components/MenuBar"
import Ads from "./components/Ads";
import Post from "./components/Post";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <Banner />
    <Menubar 
      data={[
        {key:'PERFIL', value:'/perfil'},
        {key:'SOBRE', value:'/about'},
        {key:'CONTATO', value:'/contact'},
        {key:'DOAÇÕES', value:'/donations'}
      ]}
    />
    {/* <Ads /> */}
    <Post 
      data={[
        {title: 'título 1', img: '', text: 'Este é um texto de teste'},
        {title: 'título 2', img: '', text: 'Este é um texto de teste'},
        {title: 'título 3', img: '', text: 'Este é um texto de teste'},
        {title: 'título 4', img: '', text: 'Este é um texto de teste'},
        {title: 'título 5', img: '', text: 'Este é um texto de teste'}
      ]}
    />
    </>
  );
}

export default App;
