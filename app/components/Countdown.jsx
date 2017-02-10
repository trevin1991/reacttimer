    let React = require("react"),
    Clock = require("Clock"),
    CountdownForm = require("CountdownForm");

class Countdown extends React.Component {
    constructor() {
        super();

        this.state = {
            total: 0
        }
    }

    handleSetCountdown(seconds) {
        this.setState({
            total: seconds
        })
    }

    render() {
        let { total } = this.state;
        return (
            <div>
                <Clock total={total} />
                <CountdownForm onSetCountdown={ this.handleSetCountdown.bind(this) }/>
            </div>
        );
    }
}

module.exports = Countdown;