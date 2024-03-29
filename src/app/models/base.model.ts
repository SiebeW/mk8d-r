interface IBaseSimple {
    name: string;
    imageURL: string;
}

interface IBase {
    name: string;
    imageURL: string;
    altColors?: IBaseSimple[];
    type?: string;
    DLC?: string;
  }
  
  export class Base {
    public name: string = ''
    public imageURL: string = ''
    public altColors?: IBaseSimple[];
    public type?: string = '';
    public DLC?: string = '';

    constructor(base: IBase) {
      Object.assign(this, base);
    }
  }