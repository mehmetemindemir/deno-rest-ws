import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";

const client = new MongoClient();
client.connectWithUri(
  "mongodb://url/aviation?retryWrites=true&w=majority",
);

const db = client.database("aviation");

export default db;
