interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  tipo: "verde";
}

const Button = ({ tipo, className, ...rest }: ButtonProps) => {
  let bg = "";

  switch (tipo) {
    case "verde":
      bg = "bg-success";
  }

  return (
    <>
      <button {...rest} className={`${className} ${bg} px-3 py-1 rounded`}>
        Entrar
      </button>
    </>
  );
};

export default Button;
