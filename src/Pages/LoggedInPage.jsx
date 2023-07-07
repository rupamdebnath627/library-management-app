import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const LoggedInPage = () => {
  const postData = useLoaderData();

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default LoggedInPage;

export const loader = ({ params }) => {
  return params.id;
};
