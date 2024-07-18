export class UpdateVehicleDto {
    plate?: string;
    brand?: string;
    fuelSize?: number;
    drivers?: { name: string; id: number }[];
  }