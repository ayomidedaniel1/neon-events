'use server';

import { CreateUserParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";

export const createUser = async (user: CreateUserParams) => {
  try {
    await connectToDatabase();
  } catch (error) {
    handleError(error);
  }
};