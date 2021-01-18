import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";


class Score extends Component {

    state = {
        trueA : 0,
        falseA : 0
    };

    results = JSON.parse(localStorage['results'] || "[]");

    componentDidMount(){
        const { trueA , falseA } = this.props;
        this.setState({
            trueA,
            falseA,
        });

        this.results.push({
            trueAnswer: trueA,
            falseAnswer: falseA
         })

         localStorage['results'] = JSON.stringify(this.results);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row quiz_content">
                        <div className="col-lg-6 m-auto">

                            <div className="card border-light mb-3">
                                <div className="card-header score_card quiz_card">ქულებიიიიიი</div>
                                <div className="card-body quiz_card">

                                    <p className="card-text">შენნნ მოაგროვეეეეე {this.state.trueA} ქულააააა 10-დააააან</p>

                                    <span className="badge badge-success score-badge">{this.state.trueA} სწორი</span>
                                    <span className="badge badge-danger score-badge">{this.state.falseA} არასწორი</span>

                                    <div className="btn btn-primary quiz_next_button" onClick={() => window.location.reload(false)}>
                                        თავიდან
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(Score);