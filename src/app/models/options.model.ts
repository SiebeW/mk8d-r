interface IOptions {
    allowDLC: boolean;
    allowMii:  boolean;
    allowBikes: boolean;
    allowKarts: boolean;
    allowQuads: boolean;
    allowGolds: boolean;
    allowDupes: boolean;
    localiseNames: boolean;
  }
  
  export class Options {
    public allowDLC: boolean = true;
    public allowMii:  boolean = false;
    public allowBikes: boolean = true;
    public allowKarts: boolean = true;
    public allowQuads: boolean = true;
    public allowGolds: boolean = true;
    public allowDupes: boolean = false;
    public localiseNames: boolean = true;

    constructor(options: IOptions) {
      Object.assign(this, options);
    }
  }