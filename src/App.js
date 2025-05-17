import hostingPlans from "./data";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hostwinds</h1>
      <h2>Compare Plans </h2>
      {hostingPlans.map((plans) => (
        <div class="container text-center">
          <div class="row">
            <li class="col">{plans.planName}</li>
            <li class="col">{plans.monthlyPrice}</li>
            <li class="col">{plans.diskSpace}</li>
          </div>
        </div>
      ))}
    </div>
  );
}
