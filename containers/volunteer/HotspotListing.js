import React, { useEffect, useState } from "react";
import { ScrollDiv } from "react-native-magnus";
import Spinner from "../../components/Spinner";
import {
  useLazyReadAllHotspotsQuery,
  useReadAllHotspotsQuery,
} from "../../services/aahaar";
import HotspotCard from "./HotspotCard";
// {
//   "__v": 0,
//   "_id": "62658bc64a46fd86b920ef44",
//   "address": "Kothri Kalan",
//   "capacity": 5000,
//   "contactNumber": Object {
//     "number": "3333388882",
//     "region": "+91",
//   },
//   "createdAt": "2022-04-24T17:41:26.629Z",
//   "createdBy": "dnfmQwUu3HYpVHxAjrKjs7COXQG3",
//   "description": "yahan gareeb log rehte hain bina kiraaya diye, bhadwe sale.",
//   "imgSrc": "",
//   "isNGO": false,
//   "name": "VITB Boys Hostel",
//   "numberOfReports": 0,
//   "updatedAt": "2022-04-24T17:41:26.629Z",
// }
// const data = [
//   {
//     name: "VITB Boys Hostel",
//     address: "Kothri Kalan, Bhopal",
//     capacity: 5000,
//     description:
//       "Population dense area with malnourished children, access to nutrition dense food is scarce.",
//     imgSrc:
//       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kinja-img.com%2Fgawker-media%2Fimage%2Fupload%2Fs--F2AcYynK--%2Fc_scale%2Cf_auto%2Cfl_progressive%2Cq_80%2Cw_800%2Fubkngrbgbh8phpsy3rtf.jpg&f=1&nofb=1",
//     isNGO: false,
//     contactNumber: null,
//     numberOfReports: 4,
//     _id: "4",
//   },
//   {
//     name: "VITB Boys Hostel",
//     address: "Kothri Kalan, Bhopal",
//     capacity: 5000,
//     description:
//       "Population dense area with malnourished children, access to nutrition dense food is scarce.",
//     imgSrc:
//       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kinja-img.com%2Fgawker-media%2Fimage%2Fupload%2Fs--F2AcYynK--%2Fc_scale%2Cf_auto%2Cfl_progressive%2Cq_80%2Cw_800%2Fubkngrbgbh8phpsy3rtf.jpg&f=1&nofb=1",
//     isNGO: true,
//     contactNumber: { region: "+91", number: "8289182018" },
//     numberOfReports: 4,
//     _id: "5",
//   },
//   {
//     name: "Pashupati Area",
//     address: "Pashupati, Kathmandu",
//     capacity: 2000,
//     description: "Lots of people depending on people's sympothy",
//     imgSrc:
//       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tourismmail.com%2Fpublic%2Fuploads%2F2018%2F04%2FPashupatinath-temple-in-beggars.jpg&f=1&nofb=1",
//     isNGO: false,
//     contactNumber: null,
//     numberOfReports: 4,
//     _id: "2",
//   },
// ];

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
      console.log(changedData);
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
