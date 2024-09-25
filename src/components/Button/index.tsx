interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  tipo?: "button"|"submit";
  backgroundColor: string;
  textColor: string;
  size?: "small"|"medium"|"large";
}

const Button = ({ tipo="button", backgroundColor="red", textColor="white", size, className, ...rest }: ButtonProps) => {
  let defaultSize = "100%";
  
  switch(size){
    case "small":
       defaultSize = "20px";
       break;
    case "medium": 
      defaultSize = "40px";
      break;
    case "large": 
      defaultSize = "80px";
      break;
  }


  return (
    <>
      <button type={tipo} {...rest} className={`px-3 py-1 rounded`} style={{
        backgroundColor: backgroundColor, 
        width: defaultSize,
        color: textColor
        }}>
        Entrar
      </button>
    </>
  );
};

export default Button;
