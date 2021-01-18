import React, {Component} from 'react';
import PropTypes from 'prop-types';


class CountdownTimer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            endDate : new Date(),
            seconds: "",
            expired: false
        };
    }

    startTimer() {
        let self = this;

        let x = setInterval(() => {

            let now = new Date().getTime();
            let distance = self.state.endDate - now;

            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            self.setState({
                seconds
            });

            if (distance < 0) {
                clearInterval(x);
                self.setState({
                    expired: true
                });
            }
        }, 1000);
    }

    componentDidMount() {
        const { endDate } = this.props;

        this.setState({
            endDate : endDate
        });

        this.startTimer();

    }

    formatTime(type) {
        let timeStr = "";

        switch (type) {
            case 1:
                timeStr += this.state.seconds ? (this.state.seconds > 9 ? this.state.seconds : "0" + this.state.seconds) : "00";
                break;
            case 2:
                timeStr += this.state.seconds ? (this.state.seconds > 9 ? this.state.seconds : "0" + this.state.seconds) + " წამი " : "00";
                break;
        }


        return timeStr;
    }

    render() {

        if(this.state.expired) {
            this.props.onTimerExpire();

            return <div>ამეიწურა დრო</div>;
        }

        return (
            <div>
                {this.formatTime(2)}
            </div>
        );

    }

}

CountdownTimer.propTypes = {
    onTimerExpire: PropTypes.func.isRequired,
    endDate: PropTypes.instanceOf(Date).isRequired
};

export default CountdownTimer;