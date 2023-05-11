/* 
  NavbarMenu (Organism)
  The NavbarMenu component is an organism that represents a navigation menu. It consists of an unordered list of NavbarLink components based on the links prop.

  Props
  links (array): An array of objects representing the links to be rendered in the NavbarMenu. Each object should have the following properties:
  href (string): The target URL for the link.
  label (string): The label for the link.
 */

import { NavbarMenuProps } from '@with-nx/types';

import Button from '../button/button';
import Link from '../link/link';

type LinkItem = Extract<NavbarMenuProps['links'][0], { type?: 'link' }>;
type ButtonItem = Extract<NavbarMenuProps['links'][0], { type: 'button' }>;

export const NavbarMenu = ({
  links,
  toggleButton,
}: NavbarMenuProps): JSX.Element => (
  <ul className={`navbar-menu flex space-x-4 items-center`}>
    {links.map((link, index) => (
      <li key={index}>
        {link.type === 'button' ? (
          <Button {...(link as ButtonItem)}>{link.children}</Button>
        ) : (
          <Link {...(link as LinkItem)}>{link.children}</Link>
        )}
      </li>
    ))}
    {toggleButton ? <li>{toggleButton}</li> : null}
  </ul>
);

export default NavbarMenu;
