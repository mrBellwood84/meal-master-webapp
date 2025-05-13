import { IngredientAddToolbar } from "@/components/ingredient/add/IngredientAddToolbar";
import { Fragment } from "react";

const IngredientAddPage = () => {
  return (
    <Fragment>
      <IngredientAddToolbar />
      <div>Søkefelt</div>
      <div>Felt for lagre navn</div>
      <div>Checkbox med kategorier</div>
      <div>Liste eller tabell med resultater</div>
      <br />
      <div>send api call til config for å opprette ingrediens</div>
      <div>send clear cache call til mealmaster api</div>
      <div>Redirect til edit side etter opprettelse</div>
    </Fragment>
  );
};

export default IngredientAddPage;
