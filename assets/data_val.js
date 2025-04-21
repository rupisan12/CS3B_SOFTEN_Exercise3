document.addEventListener("DOMContentLoaded", () => {
  const ctz = document.getElementById("myChart-del").getContext("2d");
  new Chart(ctz, configs);
});

const datas = {
  labels: [""],
  datasets: [
    {
      label: "Fulfilled",
      data: [56],
      backgroundColor: "rgba(47, 47, 47)",
      borderRadius: 1,
      barPercentage: 0.4,
    },
    {
      label: "Cancelled",
      data: [44],
      backgroundColor: "rgba(107, 111, 116, 0.3)",
      borderRadius: 1,
      barPercentage: 0.4,
    },
  ],
};

const configs = {
  type: "bar",
  data: datas,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          display: false,
        },
        grid: {
          drawTicks: false,
          drawBorder: false,
          display: false,
        },
      },
      y: {
        max: 100,
        stacked: true,
        beginAtZero: true,
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
          drawTicks: false,
        },
      },
    },
  },
};
