class Singleton {
  private static instance: Singleton;
  private constructor() {
    // do something construct...
  }
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
      // ... any one time initialization goes here ...
    }
    return Singleton.instance;
  }
  someMethod() {}
}

// let something = new Singleton(); //! Error: constructor of 'Singleton' is private.

let instance = Singleton.getInstance(); // do something with the instance...

//TODO: ref -> https://basarat.gitbook.io/typescript/main-1/singleton