export let createFittingData = (
  xArray, yArray
) => {
  let secondDataSerie = [];

  for (let i = 0; i < xArray.length; i++) {
    secondDataSerie.push({
      x: xArray[i],
      y: yArray[i]
    })
  }

  return secondDataSerie;
}