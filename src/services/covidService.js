import axios from "axios";
import header from "../config/setting.js";
class CovidService {

    static getData =  async (name,date)=>{
        let result = await axios.get("https://covid-193.p.rapidapi.com/history?country="+name+"&day="+date,{
            headers : {
                "x-rapidapi-key" : header.key,
                "x-rapidapi-host" : header.host,
                "useQueryString" : true
            }
            
        });
        return result;
    };

    static getCountry = async()=>{
        let result = await axios.get("https://covid-193.p.rapidapi.com/countries",{
        headers : {
            "x-rapidapi-key" : header.key,
            "x-rapidapi-host" : header.host,
            "useQueryString" : true
        }
        });
        return result;
    }

    static getStatistic = async() =>{
        let result = await axios.get("https://covid-193.p.rapidapi.com/statistics",{
            headers : {
                "x-rapidapi-key" : header.key,
                "x-rapidapi-host" : header.host,
                "useQueryString" : true
            }
        });
        return result;
    }

}


export default CovidService;