interface IOptions {
    allowMii:  boolean;
    allowBikes: boolean;
    allowKarts: boolean;
    allowQuads: boolean;
  }
  
  export class Options {
    public allowMii:  boolean = false;
    public allowBikes: boolean = true;
    public allowKarts: boolean = true;
    public allowQuads: boolean = true;

    constructor(options: IOptions) {
      Object.assign(this, options);
    }
  }