import { Controller, Get, Post, Patch, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) { }

  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto[]): any {
    return this.vehiclesService.create(createVehicleDto);
  }

  @Get()
  findAll(): any {
    return this.vehiclesService.findAll();
  }

  @Get(':plate')
  findOne(@Param('plate') plate: string): any {
    return this.vehiclesService.findOne(plate);
  }

  @Patch(':plate')
  update(@Param('plate') plate: string, @Body() updateVehicleDto: UpdateVehicleDto): any {
    return this.vehiclesService.update(plate, updateVehicleDto);
  }

  @Delete(':plate')
  remove(@Param('plate') plate: string): any {
    return this.vehiclesService.remove(plate)
  }
}
