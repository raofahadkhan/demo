import Image from "next/image";
import styles from "./page.module.css";
// fahad
export default function Home() {
  return <div style={{ color: "white" }}>{process.env.NEXT_PUBLIC_DEMO}</div>;
}
