import { Request } from "express";
import { Document } from "mongoose";

export interface AuthInterface extends Request {
  user?: {
    id: string;
    username: string;
    email: string;
  };
}

export interface User extends Document {
  name: string;
  email: string;
  mobile: string;
  password: string;
  createdAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

export interface Watchlist {
  userId: string;
  movieId: string;
  title: string;
  year: string;
  poster: string;
  addedAt: Date;
}

export interface Review {
  userId: string;
  movieId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}
