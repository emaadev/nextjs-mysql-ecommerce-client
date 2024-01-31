import { ContainerProps } from "@/interfaces";

const Container = ({ children }: ContainerProps) => {
  return <section className="mx-auto max-w-7xl">{children}</section>;
};

export default Container;
