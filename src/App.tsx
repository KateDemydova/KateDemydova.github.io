import './App.css'
import DataFetcher from "./componets/DataFetcher";
import {ToastContainer} from "react-toastify";



function App() {


  return (
      <div>
          <h1>Список постів</h1>
          <DataFetcher/>
          <ToastContainer/>

      </div>
  );
}

export default App
