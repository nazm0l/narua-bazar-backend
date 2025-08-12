
export interface IUser {
  name: string;
  email: string;
  password: string;
  isActive: boolean;
  role: "superadmin" | "admin" | "contributor";
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

