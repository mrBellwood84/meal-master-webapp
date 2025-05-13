import { redirect } from "next/navigation";

const EditRedirectPage = () => {
  redirect("/ingredient");
  return null;
};

export default EditRedirectPage;
