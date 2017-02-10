let expect = require("expect"),
    React = require("react"),
    ReactDOM = require("react-dom"),
    TestUtils = require("react-addons-test-utils"),
    $ = require("jQuery"),

    CountdownForm = require("CountdownForm");

describe("CountdownForm", () => {
    it("should exist", () => {
        expect(CountdownForm).toExist();
    });

    it("should call onSetCountdown if valid seconds entered", () => {
        let spy = expect.createSpy(),
            countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={ spy } />),
            $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.totalSecondsInput.value = "109";
        TestUtils.Simulate.submit($el.find("form")[0]);

        //expect(spy).toHaveBeenCalled()
        //expect(spy).toNotHaveBeenCalled()
        expect(spy).toHaveBeenCalledWith(109);
    });

    it("should not call onSetCountdown if invalid seconds entered", () => {
        let spy = expect.createSpy(),
            countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={ spy } />),
            $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.totalSecondsInput.value = "invalid string value";
        TestUtils.Simulate.submit($el.find("form")[0]);
        expect(spy).toNotHaveBeenCalled();
    });
});

