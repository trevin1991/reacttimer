let React = require("react");

class CountdownForm extends React.Component {
    onSubmit(e) {
        e.preventDefault();
        let strSeconds = this.refs.totalSecondsInput.value;

        if(strSeconds.match(/^[0-9]*$/)) {
            this.refs.totalSecondsInput.value = "";
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    }

    render() {
        return (
            <div>
                <form ref="form" onSubmit={ this.onSubmit.bind(this) } className="countdown-form">
                    <input type="text" ref="totalSecondsInput" placeholder="Enter Time in seconds"/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        )
    }
}

module.exports = CountdownForm;