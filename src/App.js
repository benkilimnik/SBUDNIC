import React from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route } from "react-router-dom"
import {navItems} from "./components/content/navitems"

// Components, Item Pages
import Home from "./components/ItemPages/Home"
import Team from "./components/ItemPages/Team"
import News from "./components/ItemPages/News"
import About from "./components/ItemPages/About"
import Docs from "./components/ItemPages/Docs"

const App = () => (
  <BrowserRouter>
    <Navbar navItems={navItems}/>
    {/* {allItems.map((item) => (
      <Route id={item.id} path={item.navLink} component={item.component} />
    ))} */}
    <Route exact path="/" component={Home} />
    <Route exact path="/docs" component={Docs} />
    <Route exact path="/about" component={About} />
    <Route exact path="/team" component={Team} />
    <Route exact path="/news" component={News} />
  </BrowserRouter>
)

export default App
// export { allItems }
