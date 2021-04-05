import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NotePage from "./components/NotePage";

function App() {
    return (
        <div className="mt-14">
            <Switch>
                <Route path="/note/:id" component={NotePage} />
            </Switch>
        </div>
    );
}

export default App;
