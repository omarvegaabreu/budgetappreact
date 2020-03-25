<<<<<<< HEAD
import React from "react";
=======
import React from 'react'
>>>>>>> refs/remotes/origin/master
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>HEADER</h1>
<<<<<<< HEAD
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Dashboard
    </NavLink>
    <NavLink to="/add-expense" activeClassName="is-active">
      Add Expense
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active">
      Edit
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </header>
);

export default Header;
=======
    <NavLink to="/" activeClassName="is-active" exact={true} >Dashboard</NavLink>
    <NavLink to="/add-expense" activeClassName="is-active">Add Expense</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header >

)

export default Header
>>>>>>> refs/remotes/origin/master
