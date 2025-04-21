document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("myChart-c").getContext("2d");

  const data = {
    labels: [
      "May 01",
      "May 02",
      "May 03",
      "May 04",
      "May 05",
      "May 06",
      "May 07",
    ],
    datasets: [
      {
        data: [12, 27, 35, 12, 34, 22, 44],
        borderColor: "#2f2f2f",
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            drawOnChartArea: true,
            drawTicks: false,
          },
          ticks: {
            display: false,
          },
        },
        y: {
          beginAtZero: true,
          grid: {
            drawOnChartArea: true,
            drawTicks: false,
          },
          ticks: {
            display: false,
          },
        },
      },
    },
  };

  new Chart(ctx, config);
});
