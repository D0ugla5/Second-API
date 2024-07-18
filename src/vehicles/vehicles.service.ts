import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';

@Injectable()
export class VehiclesService {
  private vehicles: Vehicle[] = [];

  create(createVehicleDto: CreateVehicleDto[]): Vehicle[] {
    const newVehicles: Vehicle[] = [];

    const currentDate = new Date(); 
    const createdBy = "Douglas"; 
    //newVehicles vai receber newVehicle

    for (const dto of createVehicleDto) {
      const newVehicle: Vehicle = {
        vehicleID: dto.vehicleID,
        plate: dto.plate,
        brand: dto.brand,
        fuelSize: dto.fuelSize,
        drivers: dto.drivers,
        createdDate: currentDate,
        createdBy: createdBy,
      };
      this.vehicles.push(newVehicle);
      newVehicles.push(newVehicle);
    }

    console.log("Passando pelo Service - Create");
    return newVehicles;
  }

  findAll(): Vehicle[] {
    console.log("Passando pelo Service - Find All");
    return this.vehicles;
  }

  findOne(plate: string): Vehicle {
    const vehicle = this.vehicles.find(v => v.plate === plate);

    if (!vehicle) {
      throw new NotFoundException(`Vehicle with plate ${plate} deleted or not found`);
    }

    console.log("Passando pelo Service - Find One");
    return vehicle;
  }

  update(plate: string, updateVehicleDto: UpdateVehicleDto): Vehicle {
    const currentDate = new Date(); 
    const updatedBy = "Douglas"; 

    const vehicle = this.findOne(plate);

    const updatedVehicle: Vehicle = {
      ...vehicle,
      ...updateVehicleDto,
      updatedDate: currentDate,
      updatedBy: updatedBy,
    };

    const index = this.vehicles.findIndex(v => v.plate === plate);
    this.vehicles[index] = updatedVehicle;

    console.log("Passando pelo Service - Update");
    return updatedVehicle;
  }
 remove(plate: string) {
    const index = this.vehicles.findIndex(v => v.plate === plate);
    if (index === -1) {
      throw new NotFoundException(`Vehicle with plate ${plate} not found`);
    }
    

    this.vehicles.splice(index, 1);

    console.log(`Vehicle with plate ${plate} deleted`);

    return {
      "deletedAt": new Date(),
      "deletedBy": "Douglas"
    }
  }
}