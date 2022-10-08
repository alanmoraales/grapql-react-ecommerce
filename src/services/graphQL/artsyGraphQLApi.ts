import createAxiosInstance from "config/axios";
import GraphQL from "./graphQL";

const artsyGraphQLApi = GraphQL(createAxiosInstance());

export default artsyGraphQLApi;
