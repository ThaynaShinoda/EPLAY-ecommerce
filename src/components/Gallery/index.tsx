import { useState } from 'react';

import { Section } from '../Section';
import { GalleryItem } from '../../pages/Home';

import { Item, Items, Action, Modal, ModalContent } from './styles';

import play from '../../assets/images/botao_play.png';
import zoom from '../../assets/images/mais_zoom.png';
import close from '../../assets/images/botao_close.png';

type Props = {
  defaultCover: string;
  gameName: string;
  items: GalleryItem[];
};

interface ModalState extends GalleryItem {
  isVisible: boolean;
}

export function Gallery({ defaultCover, gameName, items }: Props) {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: '',
  });

  function getMediaCover(item: GalleryItem) {
    if (item.type === 'image') return item.url;
    return defaultCover;
  }

  function getMediaIcon(item: GalleryItem) {
    if (item.type === 'image') return zoom;
    return play;
  }

  function closeModal() {
    setModal({
      isVisible: false,
      type: 'image',
      url: '',
    });
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url,
                });
              }}
            >
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
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="wrapper">
          <header>
            <h4>{gameName}</h4>
            <img src={close} alt="Icone de fechar" onClick={closeModal} />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt={`Imagem ampliada de ${gameName}`} />
          ) : (
            <iframe
              frameBorder={0}
              src={modal.url}
              title={`Video de ${gameName}`}
            />
          )}
        </ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </>
  );
}
