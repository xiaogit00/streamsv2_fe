import axios from 'axios'
import { UAParser } from 'ua-parser-js'
import { v4 as uuidv4 } from 'uuid'

export const fetchGuestToken = async () => {
    console.log("This is run in fetchToken")
    const parser = new UAParser()
    const browser = parser.getBrowser().name
    const deviceModel = parser.getDevice().model
    const os = parser.getOS().name
    const osVersion = parser.getOS().version
    const userId = uuidv4()
    const payload = {
        browser,
        deviceModel,
        os,
        osVersion, 
        userId
    }
    const res = await axios.post(process.env.REACT_APP_BACKEND_URL + '/api/guest-tokens', payload)
    return res.data
}