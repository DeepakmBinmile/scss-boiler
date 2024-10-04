# MuiAutocomplete Component

The `MuiAutocomplete` component is a customizable autocomplete input field built using Material-UI's `Autocomplete` component. It supports single and multiple selections and can be enhanced with virtualized lists for better performance with large datasets.

## Installation

Ensure you have the necessary dependencies installed:

```bash
npm install @mui/material @emotion/react @emotion/styled react-window
```

### Usage

Prop Table
| Prop | Type | Default Value | Description |
|-------------------|----------------------------------------|-------------------------------------|--------------------------------------------------------------------------------------------------------------|
| `options` | `Array<string | OptionsType>` | `[]` | The list of options to display in the autocomplete dropdown. |
| `label` | `string` | `""` | The label for the input field. |
| `placeholder` | `string` | `""` | The placeholder text for the input field. |
| `error` | `boolean` | `false` | If true, the input field will display an error state. |
| `helperText` | `string` | `"hello"` | Text to display below the input field when in an error state. Defaults to "hello". |
| `fixedOptions` | `Array<string | OptionsType>` | `[]` | Options that are always available, regardless of the user's input. |
| `defaultOptions` | `Array<string | OptionsType>` | `[]` | Default selected options. |
| `disabledOptions` | `Array<string | OptionsType>` | `[]` | Options that should be disabled and not selectable. |
| `multiple` | `boolean` | `false` | If true, the component supports multiple selections. |
| `value` | `string | Array<string | OptionsType>` | `[]` (for multiple) or `null` (for single) | The current selected value(s). |
| `setValue` | `(value: string | Array<string | OptionsType>) => void` | `null` | Function to set the selected value(s). |
| `...rest` | `any` | - | Any additional props to pass to the underlying `Autocomplete` component. |

## Example of Using `MuiAutocomplete` in a React Component

Here is an example of how to use the `MuiAutocomplete` component in your React application:

```javascript
export default function Home() {

 const top100Films = [
  { id: 1, label: 'The Shawshank Redemption' },
  { id: 2, label: 'The Godfather' },
  { id: 3, label: 'The Godfather: Part II' },
 ]
  const [data, setData] = useState<OptionsType[]>([]); // Initial data state
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading state
  const [value, setValue] = useState<OptionValueType>([]);

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
    return data?.length > 0 ? data?.filter(({id}) => id === 1) : undefined
  }, [data])

  const defaultOptions = useMemo(() => {
    return data?.length > 0 ? data.filter(({id}) => id === 2) : undefined
  }, [data])

  const disabledOptions = useMemo(() => {
    return data?.length > 0 ? data.filter(({id}) => id === 3) : undefined
  }, [data])


  return (
    <div>
      <MuiAutocomplete
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
```
