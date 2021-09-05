import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import useStyles from '../../styles/project';
import Card from './Card';

import artgallery from './../../images/artgallery.png'
import event from './../../images/event.jpeg'
import inovact from './../../images/inovact.png'
import elearn from './../../images/insights.png'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};
const item = [
  {
    title:'Inovact',
    image:inovact,
    des:'React,Material-UI,Scss',
  },
  {
    title:'Art Gallery ',
    image:artgallery,
    des:'HTML,CSS,Bootstrap,php, MySql',
  },
  {
    title:'Event Organizerr',
    image:event,
    des:'HTML,CSS,MongoDb,Express',
  },
  {
    title:'E-learning',
    image:elearn,
    des:'HTML,CSS,Sass',
  },  
];


const SimpleCarousel = ({ deviceType,darkState }) => {
  const classes=useStyles();
  return (
    <div style={{paddingTop:'2rem'}}>
    <Carousel
      ssr
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
    >
      {item.slice(0, 5).map((card,index) => {
        return (
          <div key={index}  className={classes.carouselCont}>
           <Card title={card.title} image={card.image} des={card.des} darkState={darkState}/>
          </div>
        );
      })}
    </Carousel>
    </div>
  );
};

export default SimpleCarousel;
