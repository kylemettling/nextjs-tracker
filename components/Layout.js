import Head from "next/head";
import Header from "./Header";
import Nav from "./nav";

const Layout = ({ user, loading = false, children }) => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header user={user} loading={loading} />
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
