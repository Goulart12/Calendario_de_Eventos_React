import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { MainPage } from "./components/MainPage";
import { EventPage } from "./components/EventPage";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={MainPage} path="/" exact />
            <Route component={EventPage} path="/events" />
        </BrowserRouter>
    )
}

export default Routes;