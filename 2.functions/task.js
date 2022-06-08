// Задание 1

  function getArrayParams(arr) {
    let min=arr[0];
    let max=arr[0];
    let sum=0;
    for (i=0;i<arr.length;i++) {
      sum+=arr[i]
        
  
      if (arr[i]>max) {
        max=arr[i]}
    if (arr[i]<min) {
      min=arr[i]}
    }
      let avg=sum/arr.length;
      avg = +parseFloat(avg).toFixed(2)
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum=0;

  for (j=0;j<arr.length;j++) {
    sum+=arr[j]
  }
  
  return sum;
}

function makeWork(arrOfArr, func) {
  let max=-Infinity
  
for (i=0;i<arrOfArr.length;i++) {
   func(arrOfArr[i])
  if (func(arrOfArr[i])>max) {
    max=func(arrOfArr[i])
  }
}

  return max;
}

// Задание 3
function worker2(arr) {
  maxim=arr[0]
    minim=arr[0]
  for (n=1;n<arr.length;n++) {
   if (arr[n]>maxim) 
     maxim=arr[n]
  if (arr[n]<minim) 
      minim=arr[n]
    }
  return maxim-minim
}

