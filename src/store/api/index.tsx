import { envVars } from "@/config/envVars";

const API_BASE_URL = envVars.NEXT_PUBLIC_API_BASE_URL;
const apiList = {
  auth: {
    register: `${API_BASE_URL}/api/v1/auth/register`,
  },
};

export default apiList;
