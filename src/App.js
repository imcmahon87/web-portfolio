import './App.css';
import './content.css';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Demos from './components/Demos';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import ScrollToTop from './components/ScrollToTop';

function App(props) {

  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  let content;
  if (props.page === "Home") {
    content = <Home />;
  } else if (props.page === "Skills") {
    content = <Skills />;
  } else if (props.page === "Projects") {
    content = <Projects />;
  } else if (props.page === "Demos") {
    content = <Demos />;
  } else {
    content = <Home />;
  }
    
  return (
    <div id="wrapper">
      <ScrollToTop />
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