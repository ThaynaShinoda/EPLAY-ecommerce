import { Container, FooterSection, Link, Links, SectionTitle } from './styles';

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <Container>
      <div className="wrapper">
        <FooterSection>
          <SectionTitle>Categorias</SectionTitle>
          <Links>
            <li>
              <Link>RPG</Link>
            </li>
            <li>
              <Link>AÇÃO</Link>
            </li>
            <li>
              <Link>AVENTURA</Link>
            </li>
            <li>
              <Link>ESPORTES</Link>
            </li>
            <li>
              <Link>SIMULAÇÃO</Link>
            </li>
            <li>
              <Link>ESTRATÉGIA</Link>
            </li>
            <li>
              <Link>FPS</Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso rápido</SectionTitle>
          <Links>
            <li>
              <Link>NOVIDADES</Link>
            </li>
            <li>
              <Link>PROMOÇÕES</Link>
            </li>
            <li>
              <Link>EM BREVE</Link>
            </li>
          </Links>
        </FooterSection>
        <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
      </div>
    </Container>
  );
}
