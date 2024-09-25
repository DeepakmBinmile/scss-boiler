import Button from './components/button/button';
import UserIcon from './assets/imagesData/UserIcon';

function App() {
  return (
    <>
      <Button>Default Button</Button>
      <Button>Next</Button>
      <Button variant='secondary'>Button with secondary styling</Button>
      <Button size='large'>Button with large Size</Button>
      <Button size='small' variant='secondary'>Button with small Size</Button>

      <Button icon={<UserIcon />} size='medium' variant='secondary'>
        Button with Icon
      </Button>
     
    </>
  );
}

export default App;


