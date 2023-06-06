import * as React from "react";
import { Typography, Button } from "antd";

const { Text } = Typography;
export interface IHeroProps {}

export default function Hero(props: IHeroProps) {
  return (
    <div className="mt-7 text-center">
      <div className="flex flex-col gap-5">
        <Text className="text-color2 text-4xl font-bold">Workout App</Text>
        <Text className="text-color2 ">
          Achieve your fitness aspirations with our all-in-one workout app.
          <br />
          Sign up today for effortless workout tracking, personal record (PR)
          achievements,
          <br />
          and exclusive fitness benefits that will take your training to the
          next level.
        </Text>
        <div>
          <Button className="bg-color2 text-color3" shape="round">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
