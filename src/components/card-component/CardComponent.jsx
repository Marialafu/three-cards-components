import styles from './card-component.module.css'

const CardComponent = ({primaryColor, primaryColorText, text, title, img}) => {

  const cardComponentClass = `card-component ${styles[primaryColor]}`
  const buttonsClass = `buttons ${styles[primaryColorText]}`

  return (
    <div className={cardComponentClass}>
      <img src={img} alt="" />
      <h2 className='title'>{title}</h2>
      <p className='text'>{text}</p>
      <button className={buttonsClass}>Learn More</button>
    </div>
  );
};

export default CardComponent;
