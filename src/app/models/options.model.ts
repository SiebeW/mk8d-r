interface IOptions {
    allowMii:  boolean;
    allowBikes: boolean;
    allowKarts: boolean;
    allowQuads: boolean;
    allowGolds: boolean;
    localiseNames: string;
  }
  
  export class Options {
    public allowMii:  boolean = false;
    public allowBikes: boolean = true;
    public allowKarts: boolean = true;
    public allowQuads: boolean = true;
    public allowGolds: boolean = true;
    public localiseNames: string = 'NA';

    constructor(options: IOptions) {
      Object.assign(this, options);
    }
  }