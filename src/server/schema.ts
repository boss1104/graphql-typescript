import { join as joinPath } from 'path';
import { sync as globSync } from 'glob';
import { readFileSync } from 'fs';
import { makeExecutableSchema } from 'graphql-tools';
import { mergeResolvers, mergeTypes } from 'merge-graphql-schemas';
import { importSchema } from 'graphql-import';

const generateSchema = (): any => {
    const pathToModules = joinPath(__dirname, '../modules');
    const graphqlTypes = globSync(`${pathToModules}/**/*.gql`).map((schema: string) =>
        importSchema(readFileSync(schema, { encoding: 'utf8' })),
    );
    const graphqlResolvers = globSync(`${pathToModules}/**/resolvers.?s`).map(
        (resolver: string) => require(resolver).Resolvers,
    );

    const resolvers = mergeResolvers(graphqlResolvers);
    const typeDefs = mergeTypes(graphqlTypes);

    return makeExecutableSchema({ typeDefs, resolvers: resolvers as any });
};

export const schema = generateSchema();
