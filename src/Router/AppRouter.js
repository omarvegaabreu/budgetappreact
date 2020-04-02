//react
import React from "react";
//react router
import { BrowserRouter, Route, Switch } from "react-router-dom";
//components
import DashboardPage from "../Components/DashboardPage";
import AddExpensePage from "../Components/AddExpensePage";
import EditExpensePage from "../Components/EditExpensePage";
import HelpPage from "../Components/HelpPage";
import NotFoundPage from "../Components/NotFoundPage";
import Header from "../Components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/add-expense" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
