import axios from "axios";

const API_URL = "https://localhost:5000";

const UserService = {
  // Exemplos de integração
  getAll: async () => {
    try {
      const response = await axios.get(`${API_URL}/user`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  getById: async (id: number) => {
    try {
      const response = await axios.get(`${API_URL}/user/${id}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
};

export default UserService;
