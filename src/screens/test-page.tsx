import Button from '../components/button/button';

export default function TestPage() {
  return (
    <div>
      <Button>Click me!</Button>
      <Button variant="primary" size="small">
        Click me!
      </Button>
      <Button variant="secondary" size="large">
        Click me!
      </Button>
      <Button variant="primary" size="medium">
        Click me!
      </Button>
    </div>
  );
}
