import styles from './pageWrapper.module.css'

const PageWrapper = ({children}) => (
  <main className={styles.mainWrapper}>{children}</main>
);

export default PageWrapper;
