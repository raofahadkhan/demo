import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
  <div>{process.env.NEXT_PUBLIC_DEMO}</div>
  );
}
