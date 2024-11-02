import { Types } from "mongoose";

export interface ISessionUser {
    userId: Types.ObjectId;
    name: string;
    isReady: boolean;
    selectedItems: {
      itemId: string;
      quantity: number;
    }[];
    joinedAt: Date;
  }