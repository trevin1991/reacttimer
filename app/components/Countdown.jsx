let React = require("react"),
    Clock = require("Clock");

class Countdown extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Clock total={1} />
            </div>
        );
    }
}

module.exports = Countdown;