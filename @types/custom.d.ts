declare module "*.scss" {
  const value: {
    [key: string]: string;
  };
  export default value;
}

declare module "*.png" {
  const value: string;
  export default value;
}
