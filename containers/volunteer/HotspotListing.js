import React, { useEffect, useState } from "react";
import { ScrollDiv } from "react-native-magnus";
import Spinner from "../../components/Spinner";
import {
  useLazyReadAllHotspotsQuery,
  useReadAllHotspotsQuery,
} from "../../services/aahaar";
import HotspotCard from "./HotspotCard";
const HotspotListing = (props) => {
  const [trigger, result, lastPromiseInfo] = useLazyReadAllHotspotsQuery();
  const [data, setData] = useState([]);

  useEffect(() => {
    //console.log("res: ", result?.currentData?.hotspots[0]);
    if (result.isUninitialized) trigger();
    if (result.isSuccess) {
      let temp = result?.currentData?.hotspots;
      let changedData = [];
      temp.forEach((item) => {
        let tempItem = JSON.parse(JSON.stringify(item));
        if (!item?.imgSrc || item.imgSrc.length === 0) {
          tempItem.imgSrc = {
            link: "https://freesvg.org/img/abstract-user-flat-4.png",
          };
        }
        changedData.push(tempItem);
      });
      setData(changedData);
    }
  }, [result]);
  return (
    <ScrollDiv {...props}>
      <Spinner show={result.isLoading} />
      {data.map((item) => {
        return <HotspotCard key={item._id} data={item} />;
      })}
    </ScrollDiv>
  );
};

export default HotspotListing;
