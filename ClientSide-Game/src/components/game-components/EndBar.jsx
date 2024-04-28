import styles from "./EndBar.module.css";


export default function EndBar(props) {
  return (
    <div className={styles.barWrapper} style={{ fill: props.fill }} {...props}>
      <div className={styles.bar} style={{ justifyContent: "initial" }}>
        {props.children}
      </div>
      <svg height="600" width="40">
        <polygon
          points={"0,300 20,0 40,300 20,600"}
          className={styles.polygon}
        />
      </svg>
    </div>
  );
}
