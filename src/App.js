import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NotePage from "./components/NotePage";
import FrontPage from "./components/FrontPage/FrontPage";

function App() {
    return (
        <div className="mt-14">
            <Switch>
                <Route path="/note/:id" component={NotePage} />
                <Route path="/profile/:id" component={FrontPage} />
            </Switch>
        </div>
    );
}

export default App;
