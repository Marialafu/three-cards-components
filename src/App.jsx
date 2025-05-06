import CardComponent from './components/card-component/CardComponent';
import CardGroup from './components/card-group/CardGroup';

const App = () => {
  return (
    <>
      <CardGroup>
        <CardComponent title='Sedans' text='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.' primaryColorText='orange-text' primaryColor='orange' img='./public/assets/images/sedans.svg'></CardComponent>
        <CardComponent title='Suvs' text='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.' primaryColorText='blue-text' primaryColor='blue' img='./public/assets/images/suvs.svg'></CardComponent>
        <CardComponent title='Luxury' text='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.' primaryColorText='green-text' primaryColor='green' img='./public/assets/images/luxury.svg'></CardComponent>
      </CardGroup>
    </>
  );
};

export default App;
