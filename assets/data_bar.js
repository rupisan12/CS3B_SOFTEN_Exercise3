const data = {
  labels: ["May 1", "May 2", "May 3", "May 4", "May 5", "May 6", "May 7"],
  datasets: [
    {
      data: [200, 100, 56, 81, 122, 123, 69],
      backgroundColor: "rgba(47, 47, 47)",
      borderRadius: 10,
    },
    {
      data: [0, 100, 144, 119, 78, 77, 131],
      backgroundColor: "rgba(107, 111, 116, 0.3)",
      borderRadius: 10,
    },
  ],
};

const config = {
  type: "bar",
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
        stacked: true,
        ticks: {
          display: false,
        },
        grid: {
          drawTicks: false,
        },
      },
      y: {
        max: 200,
        stacked: true,
        beginAtZero: true,
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,

          drawTicks: false,
        },
      },
    },
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("myChart-b").getContext("2d");
  new Chart(ctx, config);
});
