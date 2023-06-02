import * as React from "react";
import { Button, Menu, Typography } from "antd";

const { Text } = Typography;

export interface IAppProps {}

const items = [
  {
    label: (
      <Button type="primary" shape="round">
        Sign Up
      </Button>
    ),
    key: "signup",
  },
  {
    label: (
      <Button type="primary" shape="round">
        Sign Up
      </Button>
    ),
    key: "login",
  },
];

const NavBar: React.FC = () => {
  return (
    <div className="m-3 flex justify-between">
      <div>
        <Text className="text-white">Workout App</Text>
      </div>
      <div className="flex items-center justify-between">
        <Menu mode="horizontal" items={items} />
      </div>
    </div>
  );
};
export default NavBar;
