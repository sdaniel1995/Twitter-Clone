import Sidebar from './components/sidebar/Sidebar'
import Feed from './components/feed/Feed'
import Widgets from './components/widgets/Widgets'
import './css/App.css'

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Feed/>
      <Widgets/>
    </div>
  );
}

export default App;
