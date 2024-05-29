import axios from 'axios'

//{ result: '018fc666-5eeb-7dbe-a3f0-621e4906b758' }

const api_key = "msy_71TlZfQPhg5RgkpwHIGeoXOsPEM36opN35Tx"
const taskId = '018fc666-5eeb-7dbe-a3f0-621e4906b758';
const headers = { Authorization: `Bearer ${api_key}` };

try {
  const response = await axios.get(
    `https://api.meshy.ai/v2/text-to-3d/${taskId}`,
    { headers }
  );
  console.log(response.data);
} catch (error) {
  console.error(error);
}

