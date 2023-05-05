import React from "react";
import styles from "./sectionTres.module.css";

const SectionTres = () => {
  return (
    <section className={styles.contenedorSectionTres}>
      <div className={styles.contenedorContenidoUno}>
        <div className={styles.bloqueIzq}>
          <h2>
            ¿Cómo puedo vender oro en
            <span className={styles.linea}> Granada?</span>
          </h2>
          <p>
            <span>
              Nuestra tienda compro oro se encuentra en la calle Puentezuelas
              número 6 de Granada. Trae tus piezas de oro y las tasamos al
              momento para indicarte cuánto te vamos a dar por ellas.{" "}
            </span>
            O si lo prefieres, llámanos y sin compromiso te informamos sobre el
            procedimiento a seguir y el precio. Tú decides si venderlas o
            quedártelas.
          </p>
        </div>
        <div className={styles.bloqueDer}>
          <h2>¿Cuál es el precio del oro en Granada?</h2>
          <p>
            El precio del oro siempre está actualizado, tanto en nuestra web
            como en nuestra tienda compro oro en Granada. Consúltalo siempre que
            quieras o llámanos para decirte cuánto dinero te vamos a dar, en
            efectivo, por tus piezas de oro y plata.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionTres;
