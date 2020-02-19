import React, { Component, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Aux from "./Aux";
import Loadable from "react-loadable";
import ScrollToTop from "./ScrollToTop";
import guest from "./../routes/guest";

const Loader = () => {
    return <div> loading... </div>;
  };

const AdminLayout = Loadable({
  loader: () => import("./layout/AdminLayout"),
  loading: Loader
});



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: false
    };
  }

  componentWillMount() {
    let cache = localStorage.staleState;
    if (cache && typeof JSON.parse(cache) === "object") {
      this.setState({ auth: true });
    }
  }

  render() {
      const { auth } = this.state;
    const menu = guest.map((route, index) => {
      return route.component ? (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          name={route.name}
          render={state => <route.component {...state} />}
        />
      ) : null;
    });

   
      
        return (
          <Aux>
            <ScrollToTop>
              <Suspense fallback={<Loader />}>
                <Switch>
                  {menu}
                
                </Switch>
              </Suspense>
            </ScrollToTop>
          </Aux>
        );
      }
  }


export default App;
