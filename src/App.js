import './App.css';
import './content.css';
import Header from './components/Header';
import Home from './components/Home';
import Resume from './components/Resume';
import Sites from './components/Sites';
import Demos from './components/Demos';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function App(props) {

  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  let content;
  if (props.page === "Home") {
    content = <Home />;
  } else if (props.page === "Resume") {
    content = <Resume />;
  } else if (props.page === "Sites") {
    content = <Sites />;
  } else if (props.page === "Demos") {
    content = <Demos />;
  } else {
    content = <Home />;
  }
    
  return (
    <div id="wrapper">
      <Header page={props.page}/>
        <SwitchTransition>
          <CSSTransition key={location.key} in={isVisible}
                timeout={300}
                classNames="content"
                unmountOnExit
                >
            {content}
          </CSSTransition>
        </SwitchTransition>
    </div>
  );
}

export default App;