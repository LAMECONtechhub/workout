import * as React from "react";
import { Row, Col, Form, Input, Button, Typography } from "antd";
import { MdEmail } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";
const Login = () => {
  const [form] = Form.useForm();
  const [isLogin, setIsLogin] = React.useState<boolean>(true);
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div>
      <Row>
        <Col
          className="text-center"
          xs={{ span: 16, offset: 4 }}
          md={{ span: 8, offset: 8 }}
        >
          <Typography.Text className="text-color2 text-5xl font-semibold mb-3">
            {isLogin ? "Login" : "Sign Up"}
          </Typography.Text>
          <Form form={form} name="signUp" scrollToFirstError className="mt-4">
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input
                placeholder="E-mail"
                prefix={<MdEmail />}
                className="h-12 rounded-xl border-2 border-color2 border-solid "
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password
                placeholder="Password"
                prefix={<GiPadlock />}
                className=" h-12 rounded-xl border-2 border-color2 border-solid "
              />
            </Form.Item>
            {!isLogin && (
              <Form.Item
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="Confirm Password"
                  prefix={<GiPadlock />}
                  className=" h-12 rounded-xl border-2 border-color2 border-solid "
                />
              </Form.Item>
            )}
            <Form.Item>
              <Button
                shape="round"
                size="large"
                className="bg-color2"
                htmlType="submit"
              >
                Log In
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col
          className="text-center mt-6"
          xs={{ span: 16, offset: 4 }}
          md={{ span: 8, offset: 8 }}
        >
          {!isLogin && (
            <Typography.Text className="text-color2">
              Already have an account?
              <a onClick={(_) => setIsLogin(true)}>Login</a>
            </Typography.Text>
          )}

          {!isLogin && (
            <Typography.Text>
              Don't have an account?
              <a onClick={(_) => setIsLogin(false)}>Sign Up</a>
            </Typography.Text>
          )}
        </Col>
      </Row>
      <Row>
        <Col
          className="text-center mt-6"
          xs={{ span: 16, offset: 4 }}
          md={{ span: 8, offset: 8 }}
        >
          {!isLogin && (
            <Typography.Text className="text-color2">
              Already have an account?
              <a onClick={(_) => setIsLogin(true)}>Login</a>
            </Typography.Text>
          )}

          {!isLogin && (
            <Typography.Text>
              Don't have an account?
              <a onClick={(_) => setIsLogin(false)}>Sign Up</a>
            </Typography.Text>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Login;
