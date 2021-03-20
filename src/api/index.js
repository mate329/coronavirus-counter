import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) =>{
    let tmpURL = url;
    if(country) tmpURL = `${url}/countries/${country}`;

    try{
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(tmpURL);
        return { confirmed, recovered, deaths, lastUpdate, };
    }catch(error){
        return error;
    }
}

export const fetchDailyData = async () => {
    try{
        const { data } = await axios.get(`${url}/daily`);
        return data.map (({ confirmed, deaths, reportDate: date}) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    }catch(error){
        return error;
    }
}