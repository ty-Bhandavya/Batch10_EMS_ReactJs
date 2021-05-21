import { BrowserRouter } from "react-router-dom";
import { employee } from "./EMS/Employee.js";


function App() {
  return <BrowserRouter>
                
                {employee}
                
          </BrowserRouter>;
}

export default App;
