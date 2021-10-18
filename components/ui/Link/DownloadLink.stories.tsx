import DownloadLinkComponent from "./DownloadLink";

export default {
  title: "ui/Link",
  component: DownloadLinkComponent,
  args: {
    href: "/",
    children: "Link",
  },
};

export const DownloadLink = (args) => <DownloadLinkComponent {...args} />;
