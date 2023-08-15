import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import './Navigation.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello world</h1>
        <Link to="about">About</Link>
      </div>
    )
  },
  {
    path: "about",
    element: <div>About</div>,
  }
])

const Navigation = () => {
  return (
    <header className="nav">
      <RouterProvider router={router} />
      <hgroup className="navHeading">
        <h1>Travis <br/> McLaren .</h1>
        <p>
          I live in New Jersey, but work in New York.  I plan on using this site
          to just hone some of my frontend skills, and as a place to fiddle with
          some new technologies.  
        </p>
      </hgroup>
      <nav className="navMenu">
        <h2>Navigation</h2>
        <ul>
          <li>About .</li>
          <li>Resume .</li>
          <li>LinkedIn .</li>
        </ul>
        <h2>Top Projects</h2>
        <ul>
          <li>Project 1 .</li>
          <li>Project 2 .</li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation;