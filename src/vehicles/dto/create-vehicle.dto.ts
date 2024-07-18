export class CreateVehicleDto {
    vehicleID: number;
    plate: string;
    brand: string;
    fuelSize: number;
    drivers: { name: string; id: number }[];
   
  }