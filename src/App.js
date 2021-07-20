import React from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route } from "react-router-dom"

// Components, Item Pages
import Home from "./components/ItemPages/Home"
import Team from "./components/ItemPages/Team"
import News from "./components/ItemPages/News"
import About from "./components/ItemPages/About"

const navItems = [
  { id: 1, navItem: "home" },
  { id: 2, navItem: "news" },
  { id: 3, navItem: "team" },
  { id: 4, navItem: "about" },
]

const App = () => (
  <BrowserRouter>
    <Navbar navItems={navItems}/>
    {/* {allItems.map((item) => (
      <Route id={item.id} path={item.navLink} component={item.component} />
    ))} */}
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/team" component={Team} />
    <Route exact path="/news" component={News} />
  </BrowserRouter>
)

export default App
// export { allItems }
