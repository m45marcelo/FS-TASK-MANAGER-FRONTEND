import Sidebar from "./components/Sidebar";
import './App.scss'
import Tasks from "./components/Tasks";


function App() {
  return (
    <div className="app-container">
      <Sidebar/>
      <Tasks />
    </div>
  );
}

export default App;
