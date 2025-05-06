"use client";

import { AsideListActionButton } from "@/components/_shared/buttons/AsideListActionButton";
import { AsideActionButtonList } from "@/components/_shared/containers/AsideActionButtonList";
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
      <AsideActionButtonList>
        <AsideListActionButton
          icon={<Edit />}
          label="Rediger"
          onClick={clickEdit}
        />

        <AsideListActionButton
          icon={<CalendarToday />}
          label="Legg til plan"
          onClick={clickAddPlan}
        />

        {noFeatureText && (
          <AsideListActionButton
            icon={<Close />}
            label={noFeatureText}
            onClick={clickAway}
          />
        )}
      </AsideActionButtonList>
    </AsideContainer>
  );
};
