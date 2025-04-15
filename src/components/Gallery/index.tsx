import { Section } from "../Section";
import hogwarts from '../../assets/images/hogwarts_galeria.png'
import { Item, Items } from "./styles";
export function Gallery() {
  return(
    <Section title="Galeria" background="black">
        <Items>
          <Item><img src={hogwarts} alt="" /></Item>
          <Item><img src={hogwarts} alt="" /></Item>
          <Item><img src={hogwarts} alt="" /></Item>
          <Item><img src={hogwarts} alt="" /></Item>
        </Items>
      </Section>
  )
}
