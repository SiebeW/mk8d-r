interface IBaseSimple {
    name: string;
    imageURL: string;
}

interface IBase {
    name: string;
    imageURL: string;
    altColors?: IBaseSimple[];
  }
  
  export class Base {
    public name: string = ''
    public imageURL: string = ''
    public altColors?: IBaseSimple[];

    constructor(base: IBase) {
      Object.assign(this, base);
    }
  }