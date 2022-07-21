function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
      const hash =  args.join(','); 
      let objectInCache = cache.find((item) => item === hash);
      if (objectInCache) { 
          objectInCache = func.call(this, ...args);
          console.log("Из кэша: " + objectInCache); 
          return "Из кэша: " + objectInCache;
      }

      let result = func(...args); 
      cache.push(hash) ; 
      if (cache.length > 5) { 
        cache.shift  
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
  }
  return wrapper;
}
  
  
function debounceDecoratorNew(func) {
  let timerCall;
  return function(...args) {
    if (timerCall === undefined) {
        timerCall = Date.now();
        func.apply(this, args);
      } else {
        let Time = Date.now() - timerCall;
        if (Time >= ms) {
            timerCall = Date.now();
            func.apply(this, args);
        }
    }
}
}

function debounceDecorator2(func) {
  function wrapper (...args) {
    wrapper.history.push(args)
    wrapper.count++
     return func.call(this, ...args)
  }
      wrapper.count = 0;
  wrapper.history = [];
  return wrapper;
}
  

