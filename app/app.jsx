let React = require("react"),
    ReactDOM = require("react-dom"),
    {Route, Router, IndexRoute, hashHistory} = require("react-router"),
    Main = require("Main");

// Load foundation
require("style!css!foundation-sites/dist/css/foundation.min.css");
$(document).foundation();

// App css
require("style!css!sass!applicationStyles");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
        </Route>
    </Router>,
    document.getElementById("app")
);