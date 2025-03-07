import { typeDefs, resolverCollection } from "./modules";
import { inject } from "./lib/module";
import { startStandaloneServer } from "@apollo/server/standalone";

const { apolloServer } = inject({
    typeDefs,
    resolverCollection
});

const server = startStandaloneServer(apolloServer, {
    listen: {
        port: 8080
    }
}).then(({url}) => console.log(`listening at ${url}`));