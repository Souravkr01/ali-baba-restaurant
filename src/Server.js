// const express = require('express');
// const { graphqlHTTP } = require('express-graphql')
// const app = express();
// const {
//     GraphQLSchema,
//     GraphQLObjectType
// } = require('graphql');
// const schema = new GraphQLSchema({
//     query: new GraphQLObjectType({
//         name: 'hello World',
//         fields: () => ({
//             message: {
//                 type: GraphQLString,
//                 resolve: () => [1,2,3]
//             }
//         })
//     })
// });
// app.use('/graphql', graphqlHTTP({
//     schema: schema,
//     graphiql: true
// }))
// app.listen(8000., () => console.log("server running"));
