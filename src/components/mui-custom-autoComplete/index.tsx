import { useMemo, useEffect, SyntheticEvent, memo } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AutocompleteRenderGetTagProps, AutocompleteRenderInputParams, Chip } from '@mui/material';

import { MuiAutocompleteProps, OptionsType, OptionValueType } from './utils/type';
import './utils/autoComplete.scss';
import { ListboxVirtualized } from './components/LIstBoxVirtualized';
import LoadingList from './components/LoadingList';

const MuiAutocomplete = ({
  options,
  label,
  placeholder,
  error,
  helperText = 'hello',
  fixedOptions = [],
  defaultOptions = [],
  disabledOptions = [],
  multiple,
  value,
  setValue,
  ...rest
}: MuiAutocompleteProps) => {
  // For default selected options
  const initialOptions = useMemo(() => {
    if (multiple) {
      return [...fixedOptions, ...defaultOptions]; // For multiple selection
    }
    return defaultOptions[0]; // For single selection
  }, [fixedOptions, defaultOptions, multiple]);

  // For disabled options
  const disabled = useMemo(() => {
    if (multiple) {
      return [...fixedOptions, ...disabledOptions]; // For multiple selection
    }
    return disabledOptions; // For single selection
  }, [fixedOptions, disabledOptions, multiple]);

  const handleSelectionChange = (_event: SyntheticEvent, newValue: OptionValueType) => {
    if (multiple && Array.isArray(newValue)) {
      setValue([
        ...fixedOptions,
        ...newValue.filter(option => {
          if (typeof option === 'object') {
            return !fixedOptions?.includes(option); // For multi selection
          }
          return true;
        }),
      ]);
    } else if (!multiple && newValue) {
      setValue(newValue as OptionValueType); // For multi selection
    }
  };

  // Input component
  const renderInput = (params: AutocompleteRenderInputParams) => (
    <TextField
      error={error}
      {...params}
      variant="outlined"
      label={label || ''}
      placeholder={placeholder ?? ''}
      helperText={error ? helperText : undefined}
    />
  );

  // Options list
  const getOptionLabel = (option: string | OptionsType) => {
    return typeof option === 'string' ? option : option.label;
  };

  // Render selected or freeflow options in input component
  const renderTags = (tagValue: OptionsType[], getTagProps: AutocompleteRenderGetTagProps) =>
    tagValue.map((option, index) => {
      const { key, ...tagProps } = getTagProps({ index });
      return (
        <Chip
          key={key}
          label={typeof option === 'object' ? option.label : option}
          {...tagProps}
          disabled={disabled.includes(option)}
        />
      );
    });

  // Set default selected options
  useEffect(() => {
    if (!value || (Array.isArray(value) && value.length === 0)) {
      setValue(initialOptions); // Set initial value if value is empty
    }
  }, [initialOptions, value, setValue]);

  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple={multiple}
        value={value}
        loadingText={<LoadingList count={5} />}
        getOptionDisabled={option => (disabled ? disabled.includes(option) : false)}
        options={options}
        onChange={handleSelectionChange}
        getOptionLabel={getOptionLabel}
        ListboxComponent={ListboxVirtualized} // Use virtualized list
        renderTags={renderTags}
        renderInput={renderInput}
        {...rest}
      />
    </Stack>
  );
};

export default memo(MuiAutocomplete);
