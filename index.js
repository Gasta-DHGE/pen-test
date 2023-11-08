const axios = require('axios');
const requestUrl = "http://k8s-gastans-microser-37f6596121-29d332cbef97f4d3.elb.eu-central-1.amazonaws.com:3000"

const REQUESTS = 100

async function getCompanyData() {
    const axios = require('axios');

    const response = await axios.get(`${requestUrl}/company/detail?companyId=8BW7TuNj2rhLZsOSRWda`, {
        headers: {
            "gasta-dhge": "cb041321-b510-45ca-9bd6-748b957b83da",
            "uid": "zCB0vFeaAGaSRu1kbOe9iqbEwbu2"
        }
    })

    return response
}

async function test() {
    const data = await getCompanyData()
    console.log(data.data)
}

async function execute() {
    const array = [];

    for (let i = 0; i < REQUESTS; i++) {
        array[i] = 0;
    }

    for await (const num of array) {
        test()
    }

    console.log("done")
}

execute()