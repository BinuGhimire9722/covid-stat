import React from "react";
import {
    Container, Button , Form ,Row ,Col
} from "react-bootstrap";

class CountryData extends React.Component{
    render() {
        return <div>
            <div className="clearfix marginTopBtm">

            <Container>
                <div className="float-left"><h4>{this.props.title}</h4></div>
                <div className="float-right"><h4>{this.props.date}</h4></div>
            </Container>

            </div>

            <Container>
            <Row className="marginBtm">
               
                <Col md={4}>
                    <div className="textalign-center worldPadding">
                        <h5> Active Cases</h5>
                    </div>
                    <div>
                        {this.props.active.map((item)=>{
                            return <div className="clearfix">
                                <div className="float-left paddingLeft">{item.country}</div>
                                <div className="float-right paddingRight">{item.cases.active}</div>
                            </div>
                        })}
                    </div>
                    
                </Col>

                <Col md={4}>
                        <div className="textalign-center worldPadding">
                            <h5>Recoverd Cases</h5>
                        </div>
                        {this.props.recovered.map((item)=>{
                            return <div className="clearfix">
                                <div className="float-left paddingLeft">{item.country}</div>
                                <div className="float-right paddingRight">{item.cases.recovered}</div>
                            </div>
                        })}
                </Col>

                <Col md={4}>
                        <div className="textalign-center worldPadding">
                            <h5>Death Cases</h5>
                        </div>
                        {this.props.death.map((item)=>{
                        return <div className="clearfix">
                            <div className="float-left paddingLeft">{item.country}</div>
                            <div className="float-right paddingRight">{item.deaths.total}</div>
                        </div>
                        })}
                </Col>
            </Row>
            </Container>

        </div>
    }
}

export default CountryData;