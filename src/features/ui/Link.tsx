/** @jsxImportSource @emotion/react */
import tw, { TwStyle } from "twin.macro";
import { Link as RouterLink, LinkProps } from "react-router-dom";

interface StyledLinkProps extends LinkProps {
  sx?: TwStyle | TwStyle[];
}

const linkStyle = tw`
hover:underline
focus:underline
`;

export default function Link({ to, sx, children }: StyledLinkProps) {
  return (
    <RouterLink
      to={to}
      css={[linkStyle, sx]}
    >
      {children}
    </RouterLink>
  );
}
