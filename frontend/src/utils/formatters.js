export let formatCSVdata = (data) => {

  const firstDataSerie = data.slice(1, ).map(
    row => ({
      x: Number(row[0]),
      y: Number(row[1])
    })
  )

  return firstDataSerie;

}
export let formatGraphData = (firstDataSerie, secondDataSerie) => {

  return {
    options: {
      chart: {
        height: '100%'

      },
      yaxis: {
        labels: {
          show: true,
          formatter: (val) => Number(val).toFixed(1)
        }
      },
      xaxis: {
        type: 'numeric',
        labels: {
          show: true,
          formatter: (val) => Number(val).toFixed(1)
        }
      },
      fill: {
        type: 'solid',
      },
      markers: {
        size: [6, 0]
      },
      tooltip: {
        shared: false,
        intersect: true,
      },
      legend: {
        show: false
      },
    },

    series: [{
        name: 'Points',
        type: 'scatter',
        data: firstDataSerie,
      },
      {
        name: 'Line',
        type: 'line',
        data: secondDataSerie,
      }
    ]
  }

}
