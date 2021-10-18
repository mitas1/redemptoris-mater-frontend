import styles from "./spacing.module.css";

export const useSpacing = (headline: boolean, ignore: boolean) => {
  if (ignore) {
    return;
  }
  if (headline) {
    return styles.headline;
  }
  return styles.normal;
};
