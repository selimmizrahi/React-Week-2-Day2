import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import fiverr from "./fiverr.png";
import Description, { Description2 } from "./descripton";

function ProductandServices() {
  let match = useRouteMatch();

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to={`${match.url}/1`}>
              <h3> Fiverr Pro </h3>
              <p>
                We personally verify our Pros to exceed your expectations. Put a
                Pro in charge of your next project and prepare to be wowed.
              </p>
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/2`}>
              <h3> Fiverr Pro </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus doloribus, molestias consequatur, rerum natus provident
                velit, atque quidem asperiores veniam harum eveniet cupiditate
                non eius adipisci fugit nobis eum pariatur.
              </p>
            </Link>
          </li>
        </ul>
        <Switch>
          <Route path={`${match.url}/1`} exact component={Description}></Route>
          <Route path={`${match.url}/2`} exact component={Description2}></Route>
        </Switch>

        {/* <Link to={`${match.url}/2`}>
        <h3> Buying on Fiverr</h3>
        <p>
          Fiverr is the world's largest marketplace for digital services. So, if
          you have a talent, you can share that talent with our buyer community
          and make money while you are at it. Whether you are a graphic
          designer, programmer, content writer, translator, or voice over
          artist, Fiverr has a place for you. Below is a series of videos
          explaining what you need to do to start selling on Fiverr.
        </p>
      </Link>
      <Link to={`${match.url}/3`}>
        <h3> Selling on Fiverr </h3>
        <p>
          Use Fiverr to easily hire freelancers for your projects. Join over
          11,000,000 happy businesses who found their freelance match in
          minutes.
        </p>
      </Link> */}
        {/* <Switch>
        <Route path={`${match.path}/:topicID`}>
          <Topic />
        </Route>
      </Switch> */}
      </div>
    </Router>
  );
}

// function Topic() {
//   let { topicID } = useParams();
//   return <h3>Requested topic ID: {topicID}</h3>;
// }

export default ProductandServices;
