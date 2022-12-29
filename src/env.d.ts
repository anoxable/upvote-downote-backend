declare namespace NodeJS {
  interface ProcessEnv {
    readonly TYPE: string;
    readonly HOST: string;
    readonly PORT: string;
    readonly DATABASE: string;
    readonly USERNAME: string;
    readonly PASSWORD: string;
  }
}
