let React = require("react"),
    Nav = require("Nav");

const Main = (props) => {
    return (
        <div>
            <Nav/>
            <div className="row">
                <div className="column small-centered medium-6 large-4">
                    {props.children}
                </div>
            </div>
        </div>
    )
};

module.exports = Main;