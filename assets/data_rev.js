document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("myChart-a").getContext("2d");

  const data = {
    labels: [
      "Day 01",
      "Day 05",
      "Day 10",
      "Day 15",
      "Day 20",
      "Day 25",
      "Day 30",
    ],
    datasets: [
      {
        label: "May",
        data: [20000, 25000, 15000, 80000, 80000, 100000, 90000],
        borderColor: "#2f2f2f",
        backgroundColor: "rgba(47, 47, 47, 0.2)",
        borderWidth: 2,
        tension: 0,
        fill: true,
      },

      {
        label: "April",
        data: [30000, 28000, 50000, 40000, 60000, 34000, 69000],
        borderColor: "#6b6f74",
        backgroundColor: "rgba(107, 111, 116, 0.2)",
        borderWidth: 1.5,
        borderDash: [10, 10],
        tension: 0,
        fill: true,
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
          },
        },
        y: {
          beginAtZero: false,
          grid: {
            drawOnChartArea: false,
          },
        },
      },
    },
  };

  new Chart(ctx, config);
});
