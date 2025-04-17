import { Tag } from '../Tag';
import { Card, Descricao, Infos, Titulo } from './styles';

type Props = {
  title: string;
  category: string;
  system: string;
  description: string;
  infos: string[];
  image: string;
};

export function Product({
  title,
  category,
  system,
  description,
  infos,
  image,
}: Props) {
  function getDescription(description: string) {
    if (description.length > 95) {
      return description.slice(0, 92) + '...';
    }
    return description;
  }

  return (
    <Card>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Descricao>{getDescription(description)}</Descricao>
    </Card>
  );
}
