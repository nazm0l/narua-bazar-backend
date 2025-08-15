
export interface IShop {
  name: string;
  description: string;
  category: string;
  address: string;
  phoneNumber?: string;
  ownerName: string;
  imageUrl?: string;
  website?: string;
  isOpen: boolean;
  isVerified: boolean;
  createdAt?: Date; 
  updatedAt?: Date; 
}