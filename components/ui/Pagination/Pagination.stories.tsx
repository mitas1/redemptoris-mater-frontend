import PaginationComponent from "./Pagination";

export default {
  title: "ui/Pagination",
  component: PaginationComponent,
  args: {
    pageCount: 3,
    currentPage: 2,
    hasNext: true,
    hasPrev: true,
  },
};

export const Pagination = (args) => <PaginationComponent {...args} />;
