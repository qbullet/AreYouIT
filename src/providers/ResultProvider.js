import axios from 'axios'
// const URL = 'http://154.202.3.85/dss/cal.php?api_key=CNL2C8VD&fbclid=IwAR1u7AvWT-M0SPWc4VeEJUjUOkHywyOU9XpOSBjzJNjkZHj84K9GNOWKTrY'
const URL = 'https://natdanaispace.cf/mining/select_result.php'


async function PredictProvider () {
    const resp = await axios.post(URL)
    return resp.data
}

export default PredictProvider