import { AutocompleteProps } from "@mui/material";
import { Dispatch } from "react";

export type OptionsType = {
  id: number;
  label: string;
};

export type OptionValueType =
  string | OptionsType | (string | OptionsType)[] | null


export type MuiAutocompleteProps = {
  options: OptionsType[];
  label?: string;
  placeholder?: string;
  defaultOptions?: OptionsType[];
  multiple: boolean;
  error?: boolean;
  helperText?: string;
  fixedOptions?: OptionsType[];
  disabledOptions?: OptionsType[];
  value: (OptionValueType);
  setValue: Dispatch<
    React.SetStateAction<OptionValueType>
  >;
} & Omit<
  AutocompleteProps<OptionsType, boolean, boolean, boolean>,
  "renderInput"
>;
