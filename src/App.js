import './App.css';
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'

import { useFocus } from './utils'

function App() {
  
  const [inputRef, setInputFocus] = useFocus()

  return (
    <div className="app">

      {/* Sidebar */}
      <Sidebar focusTweet={setInputFocus} />

      {/* Feeds */}
      <Feed tweetRef={inputRef} />

      {/* Widget */}
      <Widgets />

    </div>
  );
}

export default App;
