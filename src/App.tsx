import Button from './components/button/button';
import UserIcon from './assets/imagesData/UserIcon';
import { useState } from 'react';

function App() {
  const [loading] = useState(true);

  return (
    <div >
      <h1>This is a default Button </h1>
      <h4>Default Button with primary variant and medium size </h4>
      <Button >Default Button  </Button>
     
      <h1>This is a default Button </h1>
      <h4>Default Button with Secondary variant with medium size</h4>
      <Button  variant='secondary' >Default Button  </Button>
    

  <h1>Small size button</h1>
  <h4>Button with small size and primary varient </h4>
  <Button size='small'>Small size </Button>

  <h1>Medium size button</h1>
  <h4>Button with medium size and primary varient </h4>
  <Button  size='medium'>Medium size </Button>

  <h1>Large size button</h1>
  <h4>Button with large size and secondary varient </h4>
  <Button  size='large' variant='secondary'>Large size </Button>

  <h1>Button with Icon</h1>
  <h4>This is a button in which icon is passed as a prop and secondary varient is used </h4>
      <Button icon={<UserIcon />}  size='medium' variant='secondary'>
        Button with Icon
      </Button>
      <h1>Button with loader</h1>
      <h4>This is a button with loader and the loading is set true </h4>
      <Button variant="primary" size="medium" loading={loading} >
        Submit
      </Button>
      </div>
      
  );
}

export default App;


