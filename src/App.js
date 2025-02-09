import { useRoutes } from 'react-router-dom';
import routes from "./routes";
import Authprovider from './context/Authcontext';
import Itemsprovider from './context/Itemscontext';
import Updatetimeprovider from './context/Updatetimecontext';
import "./assets/styles/reset.css";
import "./assets/styles/custom.css";
import "./assets/styles/shimmereffect.css"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {



  const router = useRoutes(routes);
  return (
    
    <Authprovider>
      <Itemsprovider>
      <Updatetimeprovider>
    <div className="App">
      {router}
    </div>
    </Updatetimeprovider>
    </Itemsprovider>
    </Authprovider>
    
    
  );
}

export default App;
