function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper (...args) {
    const hash = args.join(',');

    let ind = cache.findIndex((item) => item.hash === hash);

      if (ind >= 0) {
        console.log ('Из кэша: ' + cache[ind].result);
      } else {
        let result = func.call(this, ...args);
        
        if (cache.length > 4) {
          cache.shift();
        };
      
        cache.push({hash: hash, result: result});
        console.log('Вычисляем: ' + result);
      };
  };
  return String(wrapper);
};


function debounceDecoratorNew(func, ms) { 
  let timeout;   

  return function (...args) { 
    console.time('time');

    if (!timeout) {
      func.apply(this, args);
    };

    clearTimeout(timeout); 

    timeout = setTimeout(() => {            
      console.timeEnd("time");      
    }, ms);    
  };       
}



function debounceDecorator2(func, ms) {
  let timeout; 
  
  function wrapper(...args) {   
    console.time('time');
    wrapper.count += 1;

    if (!timeout) {
      func.apply(this, args);
    };

    clearTimeout(timeout); 

    timeout = setTimeout(() => {            
      console.timeEnd("time");      
    }, ms);    
  }; 
    
  wrapper.count = 0;
  console.log('wrapper.count  ' + wrapper.count)
  return wrapper;
}


