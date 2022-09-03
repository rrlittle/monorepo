import { ColorValue } from "react-native";

export interface ColorRelations {
  primary: ColorValue;
  secondary: ColorValue;
  reversed: ColorValue;
}

export interface ColorAffiliations {
  site: ColorRelations;
  accent: ColorRelations;
  error: ColorRelations;
  warning: ColorRelations;
  info: ColorRelations;
}
