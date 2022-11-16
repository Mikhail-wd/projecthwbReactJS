import Header from "./components/header";
import Footer from "./components/footer";
import Wrongpage from "./components/error404";
import Form from "./components/web_form/blank";
import './App.css';
import "./styles/style.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Footer/>
    </div>
  );
}

export default App;
