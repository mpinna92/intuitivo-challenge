import { FaGithub } from "react-icons/fa";
import Link from "next/link";

import { FooterContainer, LinkWrapper } from "./footer.styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <LinkWrapper>
        <Link
          href='https://github.com/mpinna92/intuitivo-challenge'
          passHref
          target='_blank'
        >
          Ver repositorio en github <FaGithub />
        </Link>
      </LinkWrapper>
    </FooterContainer>
  );
};
