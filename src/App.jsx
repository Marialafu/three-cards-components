import CardComponent from './components/card-component/CardComponent';
import CardGroup from './components/card-group/CardGroup';

const App = () => {
  return (
    <>
      <CardGroup>
        <CardComponent>Sedans</CardComponent>
        <CardComponent>Suvs</CardComponent>
        <CardComponent>Luxury</CardComponent>
      </CardGroup>
    </>
  );
};

export default App;
