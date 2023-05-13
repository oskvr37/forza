// Performance index component
import style from "./pi.module.sass";

export default function Pi({ pi }: { pi: number }) {
  let car_class: string;
  let color: string;

  if (pi <= 500) {
    car_class = "D";
    color = "#6EBAED";
  } else if (pi <= 600) {
    car_class = "C";
    color = "#C2A524";
  } else if (pi <= 700) {
    car_class = "B";
    color = "#D35927";
  } else if (pi <= 800) {
    car_class = "A";
    color = "#BB3C23";
  } else if (pi <= 900) {
    car_class = "S1";
    color = "#6843BF";
  } else if (pi <= 998) {
    car_class = "S2";
    color = "#4B58E5";
  } else {
    car_class = "X";
    color = "#69B749";
  }

  return (
    <div
    className={style.container}
      style={{
        backgroundColor: color,
      }}
    >
      <p
        className={style.class}
      >
        {car_class}
      </p>
      <p
        className={style.score}
      >
        {pi}
      </p>
    </div>
  );
}
