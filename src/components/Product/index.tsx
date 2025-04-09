import { Tag } from "../Tag"
import { Card, Descricao, Titulo } from "./styles"

export function Product() {
  return(
    <Card>
      <img src="//place-hold.it/222x250" />
      <Titulo>Nome do jogo</Titulo>
      <Tag>Categoria</Tag>
      <Tag>Windows</Tag>
      <Descricao>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, ipsum. Pariatur illum dolores repellendus eveniet consequatur porro, facere deleniti error. Excepturi alias porro fugiat totam sit consectetur! Modi, odit obcaecati!</Descricao>

    </Card>
  )
}
