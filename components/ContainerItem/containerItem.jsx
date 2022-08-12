import Card from './../Card/card';
import { CardContainer } from "./styles"

function ContainerItem(itens) {

    return <CardContainer>
        {
            itens?.data?.map((item) => {
                return <Card 
                    key={item.attribute.id}
                    data={item} 
                />
            })
        }
    </CardContainer>
}
  
export default ContainerItem
  