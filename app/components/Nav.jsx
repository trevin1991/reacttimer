let React = require("react"),
    { Link, IndexLink } = require("react-router");

class Nav extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Timer App</li>
                        <li><IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
                        <li><Link to="/" activeClassName="active-link">Countdown</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="dropdown menu">
                        <li className="menu-text">Created by <a target="_blank" href="https://github.com/trevin1991">Eugene Trofimovich</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

module.exports = Nav;