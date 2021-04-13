import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NotePage from "./components/note-page/NotePage";
import FrontPage from "./components/FrontPage/FrontPage";

function App() {
    return (
        <div className="mt-14">
            <Switch>
                <Route path="/note/:id" render={(props) => <NotePage {...props} />} />
                <Route path="/profile/:id" component={FrontPage} />
            </Switch>
        </div>
    );
}

export default App;
