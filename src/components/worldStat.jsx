import React from "react";
import{
    Row,Col,Container
} from "react-bootstrap";
class WorldStat extends React.Component{
    render () {
        return <div>

            <Container>
                <Row className="textalign-center worldPadding">
                    <Col md={2}>
                        <div>Date</div>
                        <div>{this.props.worldData.date}</div>
                    </Col>
                    <Col md={2}>
                        <div>Active Cases</div>
                        <div>{this.props.worldData.active}</div>
                    </Col>

                    <Col md={2}>
                        <div>New Cases</div>
                        <div>{this.props.worldData.cases}</div>
                    </Col>

                    <Col md={2}>
                        <div>Recovered</div>
                        <div>{this.props.worldData.recovered}</div>
                    </Col>

                    <Col md={2}>
                        <div>New Deaths</div>
                        <div>{this.props.worldData.death}</div>
                    </Col>

                    <Col md={2}>
                        <div>Total Cases</div>
                        <div>{this.props.worldData.total}</div>
                    </Col>

                </Row>
            </Container>
        </div>
    }
}

export default WorldStat;