export let createLinearFormulae = (a, b) => {
  if(b>0){b = '+'+b;}
  return `f(x)=${a}x${b}`;
}

export let createExponencialFormulae = (a, b) => {
  return `f(x)=${b}e^{(${a}x)}`;
}

export let createSigmoidFormulae = (a, b, c, d) => {
  return `f(x)=\\frac{${a}}{1+e^{(-x${-b}/${c})^{${d}}}}`;
}


export let createNormalFormulae = (a, b, c) => {
  return `f(x)=${a}e^{\\frac{-x+${(b ** 2)}}{${2 * (c ** 2)}}}`;
}

export let createPolinomial2Formulae = (a, b, c) => {
  if(b>0){b = '+'+b;}
  if(c>0){c = '+'+c;}

  return `f(x)=${a}x^2${b}x${c}`;
}
export let createPolinomial3Formulae = (a, b, c, d) => {
  if(b>0){b = '+'+b;}
  if(c>0){c = '+'+c;}
  if(d>0){d = '+'+d;}

  return `f(x)=${a}x^3${b}x^2${c}x${d}`;
}