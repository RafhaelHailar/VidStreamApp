import { GraphQLResolver } from "~lib/module/types";

export const resolvers: GraphQLResolver = {
    Query: {
        example: () => ""
    }
}


export const typedef = `
    type Stream {
        id: String
    }

    type Query {
        example: String
    }
`;