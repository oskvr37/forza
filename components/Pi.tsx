// Performance index component

export default function Pi({ pi }: { pi: number }) {
  let car_class: string;
  let color: string;

  if (pi <= 500) {
    car_class = "D";
    color = "#6EBAED";
  } else if (pi <= 600) {
    car_class = "C";
    color = "#D9BB33";
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
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "fit-content",
        borderRadius: "0.25rem",
        padding: "0.25rem",
        fontSize: "1.25rem",
        fontWeight: "900",
        backgroundColor: color,
      }}
    >
      <p
        style={{
          fontSize: "1.5rem",
          padding: "0 0.75rem 0 0.5rem",
          color: "#fff",
        }}
      >
        {car_class}
      </p>
      <p
        style={{
          padding: "0.25rem 0.5rem",
          backgroundColor: "#fff",
          borderRadius: "0.25rem",
          color: "#000",
        }}
      >
        {pi}
      </p>
    </div>
  );
}
