import { useEffect, useState } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, PointElement, LineElement } from "chart.js";

// Register Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement
);

const DashboardAnalytics = () => {
  const [resignationData, setResignationData] = useState([]);
  const [reasonData, setReasonData] = useState({});
  const [departmentData, setDepartmentData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
        const response = await fetch(`${apiUrl}/api/getFormData`);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setResignationData(data);
        generateChartData(data); 
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Process the data to generate chart datasets
  const generateChartData = (data) => {
    const reasonCount = {};
    const departmentCount = {};

    data.forEach((form) => {
      form.improvementAreas.forEach((reason) => {
        reasonCount[reason] = (reasonCount[reason] || 0) + 1;
      });

      departmentCount[form.department] = (departmentCount[form.department] || 0) + 1;
    });

    // Calculate total for percentages
    const totalReasons = Object.values(reasonCount).reduce((a, b) => a + b, 0);

    // Prepare data for resignation reasons pie chart
    setReasonData({
      labels: Object.keys(reasonCount),
      datasets: [
        {
          label: "Reasons for Resignation",
          data: Object.values(reasonCount),
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF5733", "#33FFCE"],
        },
      ],
    });

    // Prepare data for department-wise resignations bar chart
    setDepartmentData({
      labels: Object.keys(departmentCount),
      datasets: [
        {
          label: "Resignations by Department",
          data: Object.values(departmentCount),
          backgroundColor: "#428bca",
        },
      ],
    });
  };

  // Plugin to display percentages in Pie chart
  const percentagePlugin = {
    id: 'percentagePlugin',
    beforeDraw: function(chart) {
      var ctx = chart.ctx;
      ctx.save();
      var total = chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
      chart.data.datasets[0].data.forEach(function(value, index) {
        var percentage = Math.round((value / total) * 100) + '%';
        var meta = chart.getDatasetMeta(0);
        var arc = meta.data[index];
        var centerX = (arc.x + arc.x) / 2;
        var centerY = (arc.y + arc.y) / 2;
        ctx.fillStyle = '#fff';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(percentage, centerX, centerY);
      });
      ctx.restore();
    }
  };

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen text-red-600">{error}</div>;

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Employee Resignation Analytics</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pie Chart for Resignation Reasons */}
        <div className="bg-white shadow-xl rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Most Common Reasons for Resignation</h2>
          <div className="h-80">
            <Pie 
              data={reasonData} 
              options={{ 
                maintainAspectRatio: false, 
                responsive: true,
                plugins: {
                  legend: {
                    position: 'bottom',
                  },
                  tooltip: {
                    callbacks: {
                      label: function(context) {
                        var label = context.label || '';
                        var value = context.parsed;
                        var total = context.dataset.data.reduce((a, b) => a + b, 0);
                        var percentage = Math.round((value / total) * 100);
                        return `${label}: ${percentage}% (${value})`;
                      }
                    }
                  }
                }
              }}
              plugins={[percentagePlugin]}
            />
          </div>
        </div>

        {/* Bar Chart for Department-wise Resignations */}
        <div className="bg-white shadow-xl rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Resignations by Department</h2>
          <div className="h-80">
            <Bar data={departmentData} options={{ maintainAspectRatio: false, responsive: true }} />
          </div>
        </div>

        {/* Line Chart for Resignation Trend */}
        {/* <div className="bg-white shadow-xl rounded-lg p-6 lg:col-span-2 transition duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Resignation Trend Over Time</h2>
          <div className="h-96">
            <Line
              data={{
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [
                  {
                    label: "Resignations",
                    data: [5, 10, 15, 20, 25, 30], // Replace with dynamic data
                    borderColor: "#FF6384",
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderWidth: 2,
                    pointBackgroundColor: "#FF6384",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "#FF6384",
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                  y: {
                    beginAtZero: true,
                    title: {
                      display: true,
                      text: 'Number of Resignations'
                    }
                  },
                  x: {
                    title: {
                      display: true,
                      text: 'Month'
                    }
                  }
                }
              }}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DashboardAnalytics;