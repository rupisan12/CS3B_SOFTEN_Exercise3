document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("myChart-d").getContext("2d");

  const data = {
    labels: ["Percentage Discount", "Fixed Discount"],
    datasets: [
      {
        data: [66, 34],
        backgroundColor: ["#2f2f2f", "rgba(107, 111, 116, 0.3)"],
        borderWidth: 0,
        cutout: "80%",
      },
    ],
  };

  const config = {
    type: "doughnut",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
        },
      },
    },
    plugins: [
      {
        id: "centerText",
        beforeDraw: (chart) => {
          const { width, height, ctx } = chart;
          ctx.save();
          ctx.font = "bold 1.6rem sans-serif";
          ctx.fillStyle = "#2f2f2f";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText("66%", width / 2, height / 2);
          ctx.restore();
        },
      },
    ],
  };

  new Chart(ctx, config);
});
