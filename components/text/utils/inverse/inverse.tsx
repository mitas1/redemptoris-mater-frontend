import styles from "./inverse.module.css";

export const useInversable = (inverse: boolean) =>
  inverse ? styles.inverse : undefined;
