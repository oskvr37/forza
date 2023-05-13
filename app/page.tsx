import cars from "../cars.json";
import Car from "../components/Car";

export default function Page() {
  return (
    <main>
      <h1>Forza Horizon 5 Cars</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {cars.slice(43, 67).map((car) => (
          <Car key={car.id} car={car} />
        ))}
      </div>
    </main>
  );
}
