const Image = (props) => {
    
    const { image, title  } = props;
    return <img className="recipeImage" src={image} alt={title} />;
  };
  
  export default Image;