import axios from 'axios';

const baseUrl = 'https://polar-springs-21656.herokuapp.com/api/industries';

const getAll = async () => {
  const req = await axios.get(baseUrl);
  const data = req.data;
  return data;
};

export default {
  getAll
};
