import { Base } from "../models/base.model.js";

interface IVehiclePart {
  name: string;
  imageURL: string;
  type?: string;
}

interface Vehicles {
  bodies: IVehiclePart[];
  tires: IVehiclePart[];
  gliders: IVehiclePart[];
}

export class MarioKartData {
  public characters: Base[] = [];
  public vehicles: Vehicles = { bodies: [], tires: [], gliders: [] };

  constructor(characters: Base[], vehicles: Vehicles) {
    Object.assign(this, characters, vehicles);
  }
}

export class VehiclePart {
  public name: string = '';
  public imageURL: string = '';
  public type: string = '';

  constructor(vehiclePart: VehiclePart) {
    Object.assign(this, vehiclePart);
  }
}