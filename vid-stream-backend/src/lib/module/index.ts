import { GraphQLResolver } from "./types";
import { ApolloServer } from "@apollo/server";

export function inject({ typeDefs, resolverCollection}: {
    typeDefs: string,
    resolverCollection: GraphQLResolver[]
}) {
    const joinedResolvers: GraphQLResolver = {};

    for (let resolver of resolverCollection) {
        if (resolver.Query)
            joinedResolvers.Query = {...joinedResolvers.Query, ...resolver.Query};
        
        if (resolver.Mutation)
            joinedResolvers.Mutation = {...joinedResolvers.Mutation, ...resolver.Mutation};       
    }

    return {
        apolloServer: new ApolloServer({
            typeDefs,
            resolvers: joinedResolvers as any
        })
    }
}