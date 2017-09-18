import React, {Component} from 'react';
import './css/people.css';

export class People extends Component {
    render() {

        let nOfGrads = ["Amrit", "Max", "Ben .T", "Ben .D", "Harry", "David", "Paul", "Holly", "Janiel", "Piravin", "Gaurav"]
        const listGrads = nOfGrads.map((grad) => <li>{grad}</li>);
        return (
            <ul id="people">
                {listGrads}
            </ul>
        )
    }
}