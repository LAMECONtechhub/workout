import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import Layout from "@/components/shared/layout/layout";
import { Providers } from "@/redux/provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "white",
            fontFamily: "poppins",
          },
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ConfigProvider>
    </Providers>
  );
}
