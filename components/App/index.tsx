import React from "react";
import "../../assets/global.css";
import { Switch, Route,Link } from "react-router-dom";
import DefaultButton from "../buttons/DefaultButton";
import Input from "../input/Input"
import { Main } from "./styles";
import { Demo } from "../demos/demo";
import IconLabelButtons from "../buttons/OtherButtons";

function App() {
  return (
    <Main>
     
      <div>
        <Link to="button">Button</Link>
        <span> | </span>
        <Link to="/input">Input</Link>
        <span> | </span>
        <Link to ="/" >Demo</Link>
        <Switch>
          <Route exact path="/button" component={DefaultButton } />
          <Route exact path="/input" component={Input}/>
          <Route exact path="/" component={Demo}/>
          <Route exact path="other-buttons" component={IconLabelButtons}/>
        </Switch>
      </div>
    </Main>
  );
}

export default App;

/*

 <div>
        <Link to="/componentes"> Componentes</Link>
        <span> | </span>
        <Link to="/demo"> Demo</Link>
      </div>
      <Switch>
        <Route exact path="/componentes" component={Buttons}>
          <Buttons />
        </Route>
        <Route exact path="/demo">
          <Redirect exact to="/demo" />
        </Route>
      </Switch>

*/
