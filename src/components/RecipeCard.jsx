import Image from "./Image";
import Title from "./Title";


const RecipeCard = (props) => {

  const {title, image} = props;
    return <div> 

      <Image image={image} />
      <Title title={title}/>

      </div>;
  };
  
  export default RecipeCard;