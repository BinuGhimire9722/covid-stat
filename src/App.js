import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import MyProvider from './context/myProvider';
import Layout from "./layouts/layout.jsx";

function App() {
  return (
    <MyProvider>
      <div>
          <Layout/>
      </div>
    </MyProvider>
  );
}

export default App;
