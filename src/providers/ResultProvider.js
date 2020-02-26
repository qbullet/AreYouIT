import axios from 'axios'
const URL = 'https://natdanaispace.cf/mining/select_result.php'


async function PredictProvider () {
    const resp = await axios.post(URL)
    return resp.data
}

export default PredictProvider
