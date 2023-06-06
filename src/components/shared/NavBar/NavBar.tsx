import * as React from "react";
import { Button, Drawer, Typography } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const { Text } = Typography;

export interface IAppProps {}

const items = [
  {
    label: (
      <Button
        type="primary"
        shape="round"
        size="large"
        className="text-color3 bg-color2"
      >
        Sign Up
      </Button>
    ),
    section: "signup",
    key: "signup",
  },
  {
    label: (
      <Button
        type="primary"
        shape="round"
        size="large"
        className="text-color3 bg-color2"
      >
        Sign In
      </Button>
    ),
    section: "signup",
    key: "login",
  },
];
interface AppMenuProps {
  isinline: boolean;
}

function AppMenu(props: AppMenuProps): JSX.Element {
  let menuItems = items;
  return (
    <div
      className={`flex items-center gap-4 ${
        props.isinline ? "flex-col" : "flex-row"
      }`}
    >
      {menuItems.map((item) => (
        <Link href={item.section} key={`${item.key}`}>
          {item.label}
        </Link>
      ))}
    </div>
  );
}

const NavBar: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(true);

  const openMenu = () => {
    setOpen(true);
  };
  const close = () => {
    setOpen(false);
  };
  return (
    <div className="m-3 flex justify-between">
      <div>
        <Text className="text-primarycolor text-2xl">
          <Link href="/" className="text-color4">
            Workout App
          </Link>
        </Text>
      </div>
      <div className="flex items-center justify-between">
        <div className="md:block hidden">
          <AppMenu isinline={false} />
        </div>
        <div className="md:hidden block">
          <GiHamburgerMenu onClick={openMenu} />
        </div>
      </div>

      <Drawer className="bg-bgColor" onClose={close} open={open}>
        <AppMenu isinline={true} />
      </Drawer>
    </div>
  );
};
export default NavBar;
