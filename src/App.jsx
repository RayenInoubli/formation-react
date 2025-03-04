import './App.css';
import Hello from './components/hello/Hello';
import TaskPage from './pages/taskPage/TaskPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Menu from './components/menu/Menu';
import TaskDetails from './pages/taskDetails/TaskDetails';

function App() {

  return (
    <div>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Navigate to="/hello" />}></Route>

          <Route path="/hello" element={<Hello />}></Route>
          <Route path="/tasks" element={<TaskPage />}></Route>
          <Route path="/tasks/:id" element={<TaskDetails />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App