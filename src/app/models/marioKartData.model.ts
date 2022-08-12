interface Character {
    Name: string;
    HasAlternateColor: boolean;
    ImageURL: string;
    AltColors?: AltColor[];
  }
  
  interface AltColor {
    Name: string;
    ImageURL: string;
  }

  interface Vehicles {
    Bodies: VehicleBody[];
    Tires: VehicleComponent[];
    Gliders: VehicleComponent[];
  }
  
  interface VehicleBody {
    Name: string;
    ImageURL: string;
    Type: string;
  }

  interface VehicleComponent {
    Name: string;
    ImageURL: string;
  }
  
  export class MarioKartData {
    public Characters: Character[] = [];
    public Vehicles: Vehicles = {Bodies: [], Tires: [], Gliders: []};

    constructor(Characters: Character[], Vehicles: Vehicles) {
      Object.assign(this, Characters, Vehicles);
    }
  }