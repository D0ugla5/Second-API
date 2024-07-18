export class Vehicle {
    vehicleID: number;
    plate: string;
    brand: string;
    fuelSize: number;
    drivers: { name: string; id: number }[];
    createdDate?: Date; 
    createdBy?: string; 
    updatedDate?: Date; 
    updatedBy?: string; 
    deletedAt?: Date;   
    deletedBy?: string; 
  }