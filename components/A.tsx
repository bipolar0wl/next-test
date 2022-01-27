import Link from "next/link";
import styles from "../styles/A.module.css";
// * Кастомная ссылка
export default function A({ text, href }: { text: string; href: string }) {
  return (
    <Link href={href}>
      <a className={styles.link}>{text}</a>
    </Link>
  );
}
