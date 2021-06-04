import React from "react";
import {
    Container, Button , Form ,Row ,Col
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import CovidService from "../services/covidService.js";
import DataComponent from "./dataComponent.jsx";
import LoadingGif from "../assests/loading.gif";
import { toast } from 'react-toastify';
import WorldStat from "./worldStat.jsx";
class ContentPage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            country : "",
            startDate : new Date(),
            dateString : "",
            error:"",
            continent : "",
            cases : {},
            deaths :{},
            tests : {},
            showResponse : false,
            isLoading : false,
            countries : [],
            statistic : [],
            worldStat : {},
            topDeath : [],
            topRecovered : [],

        }
    }

    getSortOrder=(prop1,prop2)=> {    
        return function(a, b) {    
            if (a[prop1][prop2] > b[prop1][prop2]) {    
                return -1;    
            } else if (a[prop1][prop2] < b[prop1][prop2]) {    
                return 1;    
            }    
            return 0;    
        }    
    }    


    async componentDidMount(){
        let dateString= this.convertDate(this.state.startDate);

        let result = await CovidService.getCountry();

        let response = await CovidService.getStatistic();
        
        let topDeath = response.data.response;
        topDeath.sort(this.getSortOrder("deaths","total"));

        let topRecovered = response.data.response;
        topRecovered.sort(this.getSortOrder("cases","recovered"));

        response.data.response.sort(this.getSortOrder("cases","active"));
        
        let allStat = response.data.response[0];
        let worldCovid = {
            active: allStat.cases.active,
            recovered : allStat.cases.recovered,
            cases : allStat.cases.new,
            death : allStat.deaths.new,
            total : allStat.cases.total,
            date : allStat.day,
        }

        this.setState({
            dateString,
            countries : result.data.response,
            country : result.data.response[0],
            statistic : response.data.response,
            worldStat : worldCovid,
            topDeath,
            topRecovered,
        })

    }
    handleCountry=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    convertDate=(date)=>{
        let year = date.getFullYear();
        let month= date.getMonth()+1;
        if(month < 10){
            month = "0"+month
        }
        let day = date.getDate();
        if(day < 10){
            day = "0"+day
        }
        let stringDate=year +"-"+month +"-"+day;
        return stringDate;
    }

    setStartDate=(date)=>{
        let newDate = new Date(date);
        let dateString = this.convertDate(newDate);
        this.setState({ 
            startDate : date,
            dateString,
        })
    }

    handleGetData= async ()=>{
        this.setState({
            isLoading : true
        })
        var result = await CovidService.getData(this.state.country,this.state.dateString);
        let response = result.data.response;
        let errors= result.data.errors;
        if(errors.length==0 && response.length!=0){
            this.setState({
                isLoading : false,
                errors : "",
                showResponse:true,
                continent : response[0].continent,
                cases : response[0].cases,
                deaths : response[0].deaths,
                tests : response[0].tests,
            })
        }else {
            if(errors.country){
                this.setState({
                    errors  : errors.country,
                    showResponse : false,
                    isLoading : false,

                })
                toast.error(errors.country);
            }else  if(errors.day){
                    this.setState({
                    errors : errors.day,
                    showResponse : false,
                    isLoading : false,

                })
                toast.error(errors.day)
            }else{
                toast.error("No Data Found.");
                this.setState({
                    showResponse : false,
                    isLoading : false,
                    errors : 'No Data Found',
                })
            }
        }
    }


    handleCountryName=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        return <div className="contentPage">
            <WorldStat worldData={this.state.worldStat}/>

            <Row className="formBlock" id="formBlock">
                <div className="overlay"></div>
                    <Col md={6} className="form">
                        <Container className="margin-top">

                        <Row className="marginBtm">
                            <h3 className="textalign-center quote">
                                We are in this <span className="together">together</span> and we will get through this <span className="together">together</span>.
                            </h3>
                        </Row>

                        <Row>
                            <Col md={6}>
                            <Form.Control as="select" onChange={this.handleCountryName} name="country" value={this.state.country}>
                            {this.state.countries.map((country)=>{
                                return <option>{country}</option>
                             })}
                            </Form.Control>

                            </Col>

                            <Col md={6}>
                                <DatePicker selected={this.state.startDate} dateFormat="yyyy-MM-dd"
                                onChange={date => this.setStartDate(date)} className="form-control width100"/>
                            </Col>
                        </Row>
                        
                        <br></br>
                        <div className="textalign-center">
                        <Button href="#dataBlock" className="btnColor" onClick={this.handleGetData}>
                            Check Stat
                        </Button>

                        </div>
                        </Container>

                    </Col>
            </Row>

            <Row>
                <Col md={2}></Col>
                <Col md={8}>
                    <Container>
                        {this.state.isLoading == true ?
                        <div className="textalign-center paddingTB " style={{minHeight:'400px'}}>
                        <img src={LoadingGif} className="img-fluid "></img>
                        </div>
                        :
                        <></>
                        }

                        {this.state.showResponse == true && this.state.isLoading==false?
                        <div>
                            <DataComponent cases={this.state.cases} continent={this.state.continent} date={this.state.dateString}
                            country={this.state.country} deaths={this.state.deaths} tests={this.state.tests}/>
                            <div className="textalign-right paddingTB ">
                                <Button className="btnColor" href="#formBlock">Check More</Button>
                            </div>
                        </div>
                        :
                        <></>
                        }
                    </Container>
                </Col>
                <Col md={2}></Col>
                <div id="dataBlock"></div>
            </Row>

        </div>
    }
}
export default ContentPage;