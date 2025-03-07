export interface GraphQLResolver {
    Query?: Record<string, Function>
    Mutation?: Record<string, Function>
}