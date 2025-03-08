import { GraphQLResolver } from "~lib/module/types";

export const resolvers: GraphQLResolver = {
    Query: {
        example: () => "Hello, frontend from backend."
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