import { useEffect } from "react";
import React from "react";

const useDocumentTitle = (count:number) => {
  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);
  return (
    <div>
      
    </div>
  )
};

export default useDocumentTitle;
