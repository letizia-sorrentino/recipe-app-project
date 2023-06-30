const Button = (props) => {
  return (
    <div>
      <button className="button" 
      onClick={(e) => console.log("onClick")}
      >
        {" "}
        {props.children}
      </button>
    </div>
  );
};

export default Button;
