import MenuLinkComponent from "./MenuLink";

export default {
  title: "ui/MenuLink",
  component: MenuLinkComponent,
  args: {
    href: "/",
    children: "Link",
  },
};

export const MenuLink = (args) => <MenuLinkComponent {...args} />;
export const MenuLinkButton = (args) => (
  <MenuLinkComponent {...args} style="button" />
);
export const MenuLinkActive = (args) => <MenuLinkComponent {...args} active />;
