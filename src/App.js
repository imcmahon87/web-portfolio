import './App.css';
import MobileHeader from './components/MobileHeader';
import Home from './components/Home';
import Resume from './components/Resume';
import Sites from './components/Sites';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
  } else {
    content = <Home />;
  }
    
  return (
    <div id="wrapper">
      <MobileHeader page={props.page}/>
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