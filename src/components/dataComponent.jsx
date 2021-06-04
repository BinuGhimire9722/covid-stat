import React from "react";
import {
    Container, Button , FormControl ,Row ,Col
} from "react-bootstrap";
class DataComponent extends React.Component{
    render() {
        return <div className="marginTop marginBtm">
                <div className="textalign-center marginTopBtm"><h3>Covid Data</h3></div>
            
                <Row >
                    <div className="clearfix">
                        <div className="float-left">{this.props.continent} - {this.props.country}</div>
                        <div className="float-right">{this.props.date}</div>
                    </div>
                </Row>

                <div className="line marginTopBtm"></div>

                <Row className="marginBtm">
                    <Col md={2}><p>Test</p></Col>
                    <Col md={2}>
                        <div>New</div>{this.props.cases.new ? this.props.cases.new : 0}
                    </Col>
                    <Col md={2}>
                        <div>Total</div>{this.props.tests.total ? this.props.tests.total : 0}
                    </Col>
                </Row>
                <Row className="marginBtm">
                    <Col md={2}><p>Cases</p></Col>

                    <Col md={2}>
                        <div>New</div>{this.props.cases.new ? this.props.cases.new : 0}
                    </Col>

                    <Col md={2}>
                        <div>Active</div>{this.props.cases.active ? this.props.cases.active : 0}
                    </Col>

                    <Col md={2}>
                        <div>Recovered</div>{this.props.cases.recovered ? this.props.cases.recovered : 0}
                    </Col>

                    <Col md={2}>
                        <div>Critical</div>{this.props.cases.critical ? this.props.cases.critical : 0}
                    </Col>

                    <Col md={2}>
                    <div>Total</div>{this.props.tests.total ? this.props.tests.total : 0}
                    </Col>
                </Row>

                <Row>
                    <Col md={2}><p>Deaths</p>
                    </Col>

                    <Col md={2}>
                        <div>New</div>{this.props.deaths.new ? this.props.deaths.new : 0}
                    </Col>

                    <Col md={2}>
                        <div>Total</div>{this.props.deaths.total ? this.props.deaths.total : 0}
                    </Col>
                </Row>
          
         {/* <p>
         
            <b>New Cases : </b>{this.props.cases.new ? this.props.cases.new : 0}<br></br>
            <b>Critical : </b>{this.props.cases.critical ? this.props.cases.critical : 0}<br></br>
            <b>Recovered : </b>{this.props.cases.recovered ? this.props.cases.recovered : 0}<br></br>
            <b>Active : </b>{this.props.cases.active ? this.props.cases.active : 0}<br></br>
            <b>Total Cases : </b> {this.props.cases.total ? this.props.cases.total :0}<br></br>
            <b>New Deaths : </b> {this.props.deaths.new ? this.props.deaths.new : 0}<br></br>
            <b>Total Deaths : </b>{this.props.deaths.total ? this.props.deaths.total : 0}<br></br>
            <b>Total Tests : </b>{this.props.tests.total ? this.props.tests.total : 0} <br></br>
        </p> */}
       
        </div>
    }
}

export default DataComponent;