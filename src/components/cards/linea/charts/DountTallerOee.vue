<template>
  <Doughnut :options="chartOptions" :data="chartData" />
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement } from 'chart.js'

ChartJS.register(ArcElement)

export default {
  name: 'DoughnutChart',
  components: { Doughnut },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [{
          data: [40, 20],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
          ],
          borderWidth: 0
        }]
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            display: false // Esto oculta la leyenda (las etiquetas encima del gráfico)
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.label || '';
                const value = context.formattedValue;
                return `${label}: ${value}%`;
              }
            }
          }
        }
      }
    }
  }
}
</script>
