# GraphQL Tutorials

## odyssey-ts: Intro to GraphQL with TypeScript

Starter code for the Odyssey Intro to GraphQL with TypeScript course [here](https://apollographql.com/tutorials/intro-typescript).

### How to run

Navigate to the root of the project directory, and run the following commands.

```bash
docker build -t odyssey .
```

```bash
docker run -p 4000:4000 odyssey --name odyssey
```

This will start the server and watch for changes to the schema and resolvers.
