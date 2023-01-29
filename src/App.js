// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import NavBar from "./Component/NavBar";
import News from "./Component/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  // c='Asha'
const  pageSize = 5;
  // apikey= Process.env.REACT_APP_NEWS_API //Hide api and use const if it is function based componrent

  // state{
  //   progress:0
  // }
  //It is for class based component

  const [progress, setProgress] = useState(0)

// setProgress=(progrss)=>{
//   this.setState({progress:progress})
// }
// It is for class based component

    return (
      <div>
        {/* Hello my first react based Component{this.c} */}
        <Router>
          <NavBar />
            <Switch>
{/* 
<LoadingBar>
height:{3}
color:
progress={this.state.progress}
/> */}
  


            <Route exact path="/">
              <News
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                key="entertainment"
                //setProgress
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/health">
              <News
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/general">
              <News
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/science">
              <News
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                key="sports"
                // apikey={apikey}
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );

}

export default App;