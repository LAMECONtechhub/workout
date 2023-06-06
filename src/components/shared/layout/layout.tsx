import * as React from "react";
import NavBar from "../../shared/NavBar/NavBar";

export interface ILayoutProps {
  children: React.ReactElement;
}
const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};
export default Layout;
