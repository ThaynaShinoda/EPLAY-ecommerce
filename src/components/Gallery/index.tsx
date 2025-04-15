import { Section } from '../Section';
import { Item, Items, Action, Modal, ModalContent } from './styles';

import hogwarts from '../../assets/images/hogwarts_galeria.png';
import play from '../../assets/images/botao_play.png';
import zoom from '../../assets/images/mais_zoom.png';
import close from '../../assets/images/botao_close.png';

//Código mockado - código hard coded usado para preencher espaço
type GalleryItem = {
  type: 'image' | 'video';
  url: string;
};

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: hogwarts,
  },
  {
    type: 'image',
    url: hogwarts,
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/diX6fLI-WT4?si=IQj1UD79t4YdVcYk',
  },
];

type Props = {
  defaultCover: string;
  gameName: string;
};

export function Gallery({ defaultCover, gameName }: Props) {
  function getMediaCover(item: GalleryItem) {
    if (item.type === 'image') return item.url;
    return defaultCover;
  }

  function getMediaIcon(item: GalleryItem) {
    if (item.type === 'image') return zoom;
    return play;
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${gameName}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximixar a imagem"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="wrapper">
          <header>
            <h4>{gameName}</h4>
            <img src={close} alt="Icone de fechar" />
          </header>
          <img src={hogwarts} />
        </ModalContent>
        <div className='overlay'></div>
      </Modal>
    </>
  );
}
