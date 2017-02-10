let React = require("react"),
    ReactDOM = require("react-dom"),
    expect = require("expect"),
    $ = require("jQuery"),
    TestUtils = require("react-addons-test-utils"),

    Clock = require("Clock");

describe("Clock", () => {
    it("should exist", () => {
        expect(Clock).toExist();
    });

    describe("render", () => {
        it("should render clock to output", () => {
            let clock = TestUtils.renderIntoDocument(<Clock total="62"/>),
                $el = $(ReactDOM.findDOMNode(clock)),
                actualText = $el.find(".clock-text").text(),
                expected = "01:02";

            expect(actualText).toBe(expected);
        });
    });

    describe("formatSeconds", () => {
        it("should format seconds", () => {
            let clock = TestUtils.renderIntoDocument(<Clock/>),
                seconds = 615,
                expected = "10:15",
                actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });

        it("should format seconds if min/sec are less then 10", () => {
            let clock = TestUtils.renderIntoDocument(<Clock/>),
                seconds = 61,
                expected = "01:01",
                actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });
    })
});