import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import './Navigation.scss';

const MainNavigation = () => {
  return (
    <>
      <h2>Navigation</h2>
      <ul>
        <li><Link to="/">Home .</Link></li>
        <li><Link to="/about">About .</Link></li>
        <li><Link to="/resume">Resume .</Link></li>
        <li><a href="https://www.linkedin.com/in/travis-mclaren/" target="_blank">LinkedIn .</a></li>
      </ul>
    </>
  )
}

const ProjectNavigation = () => {
  return (
    <>
    <h2>Top Projects</h2>
    <ul>
      <li><Link to="/project1">Project 1 .</Link></li>
      <li><Link to="/project2">Project 2 .</Link></li>
      <li><Link to="/project3">Project 3 .</Link></li>
    </ul>
    </>
  )
}

const NavLayout = () => (
  <>
    <nav className="navMenu">
      <MainNavigation />
      <ProjectNavigation />
    </nav>
  </>
)

const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      {
        path: "/"
      },
      {
        path: "/about"
      },
      {
        path: "/resume"
      },
      {
        path: "https://www.linkedin.com/in/travis-mclaren/"
      },
      {
        path: "/project1"
      },
      {
        path: "project2"
      },
      {
        path: "project3"
      }
    ]
  }
])


const Navigation = () => {
  return (
    <header className="nav">
      <hgroup className="navHeading">
        <h1>Travis <br/> McLaren .</h1>
        <p>
          I live in New Jersey, but work in New York.  I plan on using this site
          to just hone some of my frontend skills, and as a place to fiddle with
          some new technologies.  
        </p>
      </hgroup>
      <RouterProvider router={router} />
    </header>
  )
}

export default Navigation;