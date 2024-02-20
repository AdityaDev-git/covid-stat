import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);


const CovidCountry = () => {

  const optionsBar = {
    responsive: true,
    scales: {
      y: {
        min: 0,
        max:1000,
        ticks: {
          stepSize: 500,
        },
      },
    },
  };
  const labels = ["Total cases", "Active cases", "New cases", "New deaths"];
  const dataBar = {
    labels,
    datasets: [
      {
        label: "Active Cases",
        data: [ 1000,400,20,5],
        backgroundColor: "rgba(238, 132, 132, 1)",
      },
    ],
  };

  const optionsDoughnut = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
    },
  };
  
  const dataDoughnut = {
    labels: ["Total cases", "Deaths", "Recovered"],
    datasets: [
      {
        label: "# of Votes",
        data: [60,40,50],
        backgroundColor: ["rgba(152, 216, 158, 1)", "rgba(246, 220, 125, 1)", "rgba(238, 132, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="pt-12">
      <div className="flex flex-wrap gap-4 mb-6">
        <button><div className="rounded-full w-10"><img src="https://vectorflags.s3.amazonaws.com/flags/in-circle-01.png" alt="" /></div></button>
        <button><div className="rounded-full w-10"><img src="https://vectorflags.s3.amazonaws.com/flags/us-circle-01.png" alt="" /></div></button>
        <button><div className="rounded-full w-10"><img src="https://vectorflags.s3.amazonaws.com/flags/es-circle-01.png" alt="" /></div></button>
        <button><div className="rounded-full w-10"><img src="https://vectorflags.s3.amazonaws.com/flags/ru-circle-01.png" alt="" /></div></button>
      </div>

        <div className="flex flex-wrap gap-3">
          <div className="flex-1 h-80 p-3 border-2 border-light-purple">
            <Bar options={optionsBar} data={dataBar} />
          </div>
          <div className="flex-1 h-80 p-3 flex justify-center border-2 border-light-purple">
          <Doughnut options={optionsDoughnut} data={dataDoughnut}/>
          </div>
        </div>
    </div>
  );
};

export default CovidCountry;
