import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode | string;
}

export function ContainerCentered({ children }: ContainerProps) {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {children}
    </div>
  );
}

export function ContainerFluid({ children }: ContainerProps) {
  return <div className="container-fluid mt-3">{children}</div>;
}
