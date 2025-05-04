"use client";

import { AsideButtonListButton } from "@/components/_shared/buttons/AsideButtonListButton";
import { AsideButtonList } from "@/components/_shared/containers/AsideButtonList";
import { AsideContainer } from "@/components/_shared/containers/AsideContainer";
import { CalendarToday, Close, Edit } from "@mui/icons-material";
import { useState } from "react";

export const RecipeOptionButtons = () => {
  const [noFeatureText, setNoFeatureText] = useState<string>();

  const clickEdit = () =>
    setNoFeatureText("Rediger oppskrift ikke lagt til enda");
  const clickAddPlan = () =>
    setNoFeatureText("Legg til plan funksjon ikke lagt til enda ");
  const clickAway = () => setNoFeatureText(undefined);

  return (
    <AsideContainer>
      <AsideButtonList>
        <AsideButtonListButton
          icon={<Edit />}
          label="Rediger"
          onClick={clickEdit}
        />

        <AsideButtonListButton
          icon={<CalendarToday />}
          label="Legg til plan"
          onClick={clickAddPlan}
        />

        {noFeatureText && (
          <AsideButtonListButton
            icon={<Close />}
            label={noFeatureText}
            onClick={clickAway}
          />
        )}
      </AsideButtonList>
    </AsideContainer>
  );
};
