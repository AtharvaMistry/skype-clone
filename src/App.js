import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './component/LoginComp/Auth';
import CreateAccount from './component/LoginComp/CreateAccount';
import EnterCode from './component/LoginComp/EnterCode';
import PracticeUI from './component/PracticeUI';
import './App.css';

function App() {
  return (
    <Router>
      <div className="p-0 App">
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/enter-code" element={<EnterCode />} />
          <Route path="/practice-ui" element={<PracticeUI />} />
        </Routes>
      </div>
    </Router>
  

      
    
  );
}



export default App;
