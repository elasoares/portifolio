import styles from "./Foto.module.css";

export function Foto({ className, src, alt }) {
  return (
    <>
      <img className={`${className}`} src={src} alt={alt} />
    </>
  );
}
