import A from "./A";
import Head from "next/head";
import { ReactNode } from "react";

const MainContainer = ({
  children,
  keywords,
}: {
  children?: ReactNode;
  keywords?: string;
}) => {
  return (
    <>
      <Head>
        <meta name="keywords" content={`nextjs, test, ${keywords}`} />
        <title>Главная страница</title>
      </Head>
      <div className="navbar">
        <A href={"/"} text="Главная" />
        <A href={"/users"} text="Пользователи" />
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;
