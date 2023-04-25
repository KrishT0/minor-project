import { useState, useEffect } from 'react';

function VisitCounter() {
     const [count, setCount] = useState(0);

     useEffect(() => {
          // Get the current count from localStorage
          const storedCount = localStorage.getItem('visitCount');
          if (storedCount) {
               setCount(parseInt(storedCount));
          }
     }, []);

     // Increment the count when the page is visited
     useEffect(() => {
          const storedCount = localStorage.getItem('visitCount');
          if (storedCount) {
               const newCount = parseInt(storedCount) + 1;
               localStorage.setItem('visitCount', newCount);
               setCount(newCount);
          } else {
               localStorage.setItem('visitCount', 1);
               setCount(1);
          }
     }, []);

     return <div>{count}</div>;
}

export default VisitCounter;