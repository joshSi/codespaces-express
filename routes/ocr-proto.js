const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

const apiKey = "my-api-key-here";
const account = "mindee";
const endpoint = "expense_receipts";
const version = "5.0";

async function makeRequest(filePath) {
  let data = new FormData();
  data.append("document", fs.createReadStream(filePath));
  const config = {
    method: "POST",
    url: `https://api.mindee.net/v1/products/${account}/${endpoint}/v${version}/predict`,
    headers: {
      "Authorization": `Token ${apiKey}`,
      ...data.getHeaders()
    },
    data
  }
  try {
    let response = await axios(config)
    console.log(response.data);
  } catch (error) {
    console.log(error)
  }
}

makeRequest("/path/to/the/file.ext");