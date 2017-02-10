let React = require("react");

class Clock extends React.Component {
    formatSeconds(total) {
        let seconds = total % 60,
            minutes = Math.floor(total / 60);

        if(seconds < 10)
            seconds = `0${seconds}`;
        if(minutes < 10)
            minutes = `0${minutes}`;

        return `${minutes}:${seconds}`;
    }

    render() {
        let { total } = this.props;

        return (
            <div className="clock">
                <span className="clock-text">
                    { this.formatSeconds(total) }
                </span>
            </div>
        )
    }
}

Clock.defaultProps = {
    total: 0
};

Clock.propTypes = {
    total: React.PropTypes.number
};

module.exports = Clock;