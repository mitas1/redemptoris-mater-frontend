import HeaderComponent from "./Header";

export default {
  title: "common/Header",
  component: HeaderComponent,
  args: {
    handleDrawer: () => {},
    handleDrawerClose: () => {},
  },
};

export const Header = (args) => <HeaderComponent {...args} />;
