import LinkComponent from "./Link";

export default {
  title: "ui/Link",
  component: LinkComponent,
  args: {
    href: "/",
    children: "Link",
  },
};

export const Link = (args) => <LinkComponent {...args} />;
export const ButtonLink = (args) => <LinkComponent {...args} />;

ButtonLink.args = {
  style: "button",
};
