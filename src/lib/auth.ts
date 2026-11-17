import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const mongodbUri = process.env.MONGODB_URI;


const client = new MongoClient(mongodbUri);
const db = client.db("campus-net");

export const auth = betterAuth({
      database: mongodbAdapter(db, {
    client,
  }),

  //...other options
  emailAndPassword: { 
    enabled: true, 
  }, 
});