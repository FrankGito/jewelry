import axios from 'axios'

const api_key = "msy_71TlZfQPhg5RgkpwHIGeoXOsPEM36opN35Tx"

const headers = { Authorization: `Bearer ${api_key}` };
const payload = {
  mode: 'preview',
  prompt: 'a monster mask',
  art_style: 'realistic',
  negative_prompt: 'low quality, low resolution, low poly, ugly',
};

try {
  const response = await axios.post(
    'https://api.meshy.ai/v2/text-to-3d',
    payload,
    { headers }
  );
  console.log(response.data);
} catch (error) {
  console.error(error);
}

