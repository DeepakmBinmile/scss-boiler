import { useEffect, useMemo, useState } from 'react';

import { OptionsType } from './utils/type';
import { top100Films } from './utils/dummy';

import MuiCustomAutoComplete from '.';

export default function ExampleAutoComplete() {
  const [data, setData] = useState<OptionsType[]>([]); // Initial data state
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [value, setValue] = useState<(string | OptionsType)[] | OptionsType | string | null>([]);

  // const [newValues, setNewValues] = useState<string | OptionsType>();

  useEffect(() => {
    // Simulate loading data with a timeout
    setTimeout(() => {
      setData(top100Films); // After 2 seconds, set the data
      setIsLoading(false); // Set loading to false
    }, 2000);
  }, []);

  // Function to handle changes in selected values

  const fixedOptions = useMemo(() => {
    return data?.length > 0 ? data?.filter(({ id }) => id === 1) : undefined;
  }, [data]);

  const defaultOptions = useMemo(() => {
    return data?.length > 0 ? data.filter(({ id }) => id === 3) : undefined;
  }, [data]);

  const disabledOptions = useMemo(() => {
    return data?.length > 0 ? data.filter(({ id }) => id === 6) : undefined;
  }, [data]);

  return (
    <div>
      <MuiCustomAutoComplete
        error={false}
        helperText="please add more options"
        options={data} // Use the data from state
        label="Select your favorite movie"
        placeholder="Favorites"
        loading={isLoading} // Pass the loading state
        multiple={true}
        fixedOptions={fixedOptions}
        defaultOptions={defaultOptions}
        disabledOptions={disabledOptions}
        value={value}
        setValue={setValue}
      />
    </div>
  );
}
