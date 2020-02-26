import axios from 'axios'
// const URL = 'http://154.202.3.85/dss/cal.php?api_key=CNL2C8VD&fbclid=IwAR1u7AvWT-M0SPWc4VeEJUjUOkHywyOU9XpOSBjzJNjkZHj84K9GNOWKTrY'
const URL = 'https://natdanaispace.cf/mining/index.php?'


async function PredictProvider (data) {
    let payload = 
    'api=K0xzPs2'
    + '&gender=' + data.gender
    + '&region=' + data.region
    + '&admit=' + data.admit
    + '&highschoolgpa=' + data.highschoolgpa
    + '&englishskill=' + data.englishskill
    + '&itthinking=' + data.itthinking
    + '&dohw=' + data.dohw
    + '&askteacher=' + data.askteacher
    + '&fconcern=' + data.fconcern
    + '&testpre=' + data.testpre
    + '&gaming=' + data.gaming
    
    // eslint-disable-next-line no-console
    console.log(URL.concat(payload))

    const resp = await axios.post(URL.concat(payload))
    return resp.data
}

export default PredictProvider