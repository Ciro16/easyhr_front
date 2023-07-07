import html2pdf from "html2pdf.js";
import "./organizationalChart.css";
import { useRef } from "react";
import OrganizationalLevel from "./organizationalLevel";

const OrganizationalChart = () => {
  const organizationalChart = useRef();

  const printPDF = async () => {
    const options = {
      margin: [30, 0, 0, 0],
      enableLinks: false,
      html2canvas: { useCORS: true },
      jsPDF: { orientation: "landscape" },
    };

    await html2pdf().set(options).from(organizationalChart.current).save();
  };

  const organigrama = {
    person: "yo",
    level: [
      {
        person: "persona",
        brothers: [
          {
            person: "Una gente",
            level: [
              {
                person: "Gente de abajo",
              },
            ],
          },
          {
            person: "Otra gente",
          },
          {
            person: "Otra gente",
          },
        ],
      },
    ],
  };

  return (
    <div className="chartContainer">
      <div className="organizationalChartButtons">
        <button className="border-0" onClick={printPDF}>
          <i className="bi bi-download"></i>
        </button>
      </div>

      <div className="organizationalChart" ref={organizationalChart}>
        <OrganizationalLevel
          person={organigrama.person}
          brothers={organigrama.brothers}
          level={organigrama.level}
        />
      </div>
    </div>
  );
};

export default OrganizationalChart;
