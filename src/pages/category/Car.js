import { useEffect, useState } from "react";
import { scrollList } from "../../api";

export const Car = () => {
  const [isLoading, setIsLoading] = useState(true);
  cosnt[(scrollData, setScrollData)] = useState();
  const [resultData, setResultData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const result = await scrollList(1);
        setResultData(result);
        setScrollData(items.item);
        setIsLoading(false);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return;
};

export default Car;
