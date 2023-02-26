import './App.css';
import MobileHeader from './components/MobileHeader';
import Home from './components/Home';
import Resume from './components/Resume';

function App(props) {
  let content;
  if (props.page === "Home") {
    content = <Home />;
  } else if (props.page === "Resume") {
    content = <Resume />;
  } else {
    content = <Resume />;
  }
    
  return (
    <div id="wrapper">
      <MobileHeader />
      {content}
    </div>
  );
}

export default App;