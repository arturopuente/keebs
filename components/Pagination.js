import { boardUrl } from "../shared/api";
import styles from "./Pagination.module.css";

export default function Pagination({ page, nextPage, previousPage }) {
  return (
    <div className={styles.pagination}>
      {previousPage && <button onClick={previousPage}>Previous</button>}
      <span>Page: {page === 0 ? "1" : page / 50 + 1}</span>
      <button onClick={nextPage}>Next</button>
    </div>
  );
}
