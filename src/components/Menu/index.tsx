import { IMenu } from "../../interfaces";
import { Accordion } from "../Accordion";

const Menu = ({ dadosMenu }: { dadosMenu: IMenu[] | undefined }) => {
  return (
    <>
      <div>
        {dadosMenu?.map((item) => {
          return <> 
            <div key={item.Id}> 
              <Accordion title={item.Nome} >
              {item.Itens.map((menuFilho, index) => {
                return < >
                  <div key={index} className="pl-4">
                    {menuFilho.Nome}
                  </div>
                </>
              } 

              )}
              </Accordion>

              

            </div>
          </>
        })}
      </div>
    </>
  );
};

export default Menu;
