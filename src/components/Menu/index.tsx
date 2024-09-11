import { IMenu } from "../../interfaces";

const Menu = ({ dadosMenu }: { dadosMenu: IMenu[] | undefined }) => {
  return (
    <>
      <div>
        {dadosMenu?.map((item) => {
          return <> 
            <div key={item.Id}> 
              {item.Nome}


              {item.Itens.map((menuFilho, index) => {
                return < >
                  <div key={index} className="pl-4">
                    {menuFilho.Nome}
                  </div>
                </>
              } 

            )}

            </div>
          </>
        })}
      </div>
    </>
  );
};

export default Menu;
