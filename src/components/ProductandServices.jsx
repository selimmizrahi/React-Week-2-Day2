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

function ProductandServices() {
  let match = useRouteMatch();

  return (
    <div>
      <Link to={`${match.url}/1`}>
        <h3> Fiver Pro </h3>
        <p>
          We personally verify our Pros to exceed your expectations. Put a Pro
          in charge of your next project and prepare to be wowed.
        </p>
      </Link>
      <Link to={`${match.url}/2`}>
        <h3> Fiver Pro </h3>
        <p>
          We personally verify our Pros to exceed your expectations. Put a Pro
          in charge of your next project and prepare to be wowed.
        </p>
      </Link>
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
      <Switch>
        <Route path={`${match.path}/:topicID`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicID } = useParams();
  return <h3>Requested topic ID: {topicID}</h3>;
}

export default ProductandServices;

{
  /* <Link to={`${match.url}/2`}>
        <h3> Selling on Fiverr</h3>
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
        <h3> Buying on Fiverr</h3>
        <p>
          Use Fiverr to easily hire freelancers for your projects. Join over
          11,000,000 happy businesses who found their freelance match in
          minutes.
        </p>
      </Link> */
}
