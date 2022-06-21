function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper (...args) {
    const hash = args.join(',');

    let element = cache.find((item) => item.hash === hash);

      if (element) {
        return 'Из кэша: ' + element.result;
      };

      let result = func.call(this, ...args);
        
      if (cache.length > 4) {
        cache.shift();
      }; 
    
      cache.push({hash: hash, result: result});
      return 'Вычисляем: ' + result;
      
  };
  return wrapper;
};


function debounceDecoratorNew(func, ms) { 
  let timeout;   

  return function (...args) { 
    if (!timeout) {
      func.apply(this, args);
    };
  
    clearTimeout(timeout);
    
    timeout = setTimeout(() => {            
      func.apply(this, args);
    }, ms);  
  };       
};


function debounceDecorator2(func, ms) {
  let timeout; 
  
  function wrapper(...args) {   
    wrapper.count += 1;

    if (!timeout) {
      func.apply(this, args);
    };

    clearTimeout(timeout); 

    timeout = setTimeout(() => {  
       func.apply(this, args);            
    }, ms);    
  }; 
   
  wrapper.count = 0;
  return wrapper;
};




