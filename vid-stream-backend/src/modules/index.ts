import { typedef as StreamTypeDef, resolvers as StreamResolvers } from "./stream/graphql";

export const typeDefs = `#graphql
    ${StreamTypeDef}
`;

export const resolverCollection = [StreamResolvers];