import "./salaryCard.css";

const SalaryCard = () => {
  return (
    <section className="salaryCard border ps-3 pt-3">
      <header>
        <h6>Salario</h6>
      </header>

      <div className="salaryInfo my-2 pe-5 py-2 border-bottom d-flex justify-content-between">
        <span className="fw-semibold">Importe</span>
        <span>$85,000.00</span>
      </div>

      <div className="salaryInfo my-2 pe-5 py-2 border-bottom d-flex justify-content-between">
        <span className="fw-semibold">Moneda</span>
        <span>DOP</span>
      </div>

      <div className="salaryInfo my-2 pe-5 py-2 border-bottom d-flex justify-content-between">
        <span className="fw-semibold">Salario promedio diario</span>
        <span>$3,566.93</span>
      </div>

      <div className="salaryInfo my-2 pe-5 py-2 border-bottom d-flex justify-content-between">
        <span className="fw-semibold">Paquete anual</span>
        <span>$1,020,000</span>
      </div>
    </section>
  );
};

export default SalaryCard;
