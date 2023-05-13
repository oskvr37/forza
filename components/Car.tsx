import { TCar } from "../types";
import style from "./car.module.sass";

import Pi from "./Pi";

export default function Car({ car }: { car: TCar }) {
  const {
    img,
    name,
    year,
    make,
    category,
    price,
    sources,
    score,
    transmission,
    power,
    weight,
    stats,
    perfs,
  } = car;

  return (
    <div className={style.container}>
      <div className={style.heading}>
        <div className={style.row}>
          <div className={style.photo}>
            <img src={`https://www.kudosprime.com/fh5/${img}`} alt={name} />
          </div>
          <div className={style.basic}>
            <p>
              <i>{year}</i> {make}
            </p>
            <h3>{name}</h3>
            <p>{category}</p>
          </div>
        </div>
        <div>
          <Pi pi={score} />
        </div>
      </div>

        <p className={style.price}>{price.toLocaleString("en-US")} Cr</p>
      {/* <p>{transmission}</p>
      <p>{power} HP</p>
      <p>{weight} kg</p> */}

      {/* <div className={style.sources}>
        {sources.map((source) => (
          <span key={source}>{source}</span>
        ))}
      </div> */}

    </div>
  );
}
