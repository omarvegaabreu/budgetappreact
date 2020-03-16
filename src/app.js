"use strict";

//react
import React from "react";
import ReactDOM from "react-dom";
//Router
import AppRouter from '../src/Router/AppRouter'

//css
import "normalize.css";
import "./styles/styles.scss";



ReactDOM.render(<AppRouter />, document.getElementById("app"));
