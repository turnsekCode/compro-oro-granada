import React from "react";
//import Image from "next/image";
import styles from "./sectionCuatro.module.css";

const SectionCuatro = () => {
  return (
    <section className={styles.contenedorSectionCuatro}>
      <div className={styles.bloqueIzq}>
        <h2>
          ¿Cuánto dinero recibo por vender plata en
          {""}
          <span className={styles.linea}>Granada?</span>
        </h2>
        <p>
          En Quickgold Granada puedes traer tus piezas de plata: cuberterías,
          monedas, joyas, monedas, etc. Y te indicaremos cuál es el contraste de
          la plata para indicarte qué dinero en efectivo vas a recibir por
          ellas. Mejor servicio y precio por kilo de plata garantizado con el
          precio siempre actualizado en la ciudad de Granada. Vende plata con
          total confianza y absoluta seguridad.
        </p>
      </div>
      <div className={styles.bloqueDer}>
        <img
          loading="lazy"
          src="/compro-oro-granada.webp"
          alt="Compro oro granada"
          className={styles.Image}
          width={480}
          height={390}
        />
      </div>
    </section>
  );
};

export default SectionCuatro;
