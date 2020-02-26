import axios from 'axios'
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

    const resp = await axios.post(URL.concat(payload))
    return resp.data
}

export default PredictProvider
