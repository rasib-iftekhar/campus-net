import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const mongodbUri = process.env.MONGODB_URI;

if (!mongodbUri) {
  throw new Error("MONGODB_URI is required to initialize authentication.");
}

const client = new MongoClient(mongodbUri);
const db = client.db();

export const auth = betterAuth({
      database: mongodbAdapter(db, {
    client,
  }),

  //...other options
  emailAndPassword: { 
    enabled: true, 
  }, 
});