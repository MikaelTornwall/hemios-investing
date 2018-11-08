import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/data';

const getAll = async () => {
  const req = await axios.get(baseUrl);
  const data = req.data;
  return data;
};

export default { getAll };
