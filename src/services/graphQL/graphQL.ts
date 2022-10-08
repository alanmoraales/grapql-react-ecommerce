import { AxiosRequestConfig, AxiosInstance } from "config/axios";

interface GraphQLQueryVariables {
  [key: string]: string;
}

const GraphQL = (axios: AxiosInstance) => {
  const post = async <T>(
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const url = "";
    const axiosResponse = await axios.post<T>(url, data, config);
    return axiosResponse.data;
  };

  const fetchQuery = async <T>(
    template: string,
    variables: GraphQLQueryVariables = {}
  ) => post<T>({ query: template, variables });

  return {
    fetchQuery,
  };
};

export default GraphQL;
