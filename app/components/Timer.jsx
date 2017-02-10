let React = require("react"),
    Clock = require("Clock");

class Timer extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Clock total={583} />
            </div>
        )
    }
}

module.exports = Timer;