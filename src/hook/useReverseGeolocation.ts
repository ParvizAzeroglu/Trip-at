import { useEffect, useState } from "react";

const URL = "https://api.bigdatacloud.net/data/reverse-geocode";
const key = import.meta.env.VITE_BIGDATACLOUD_API_KEY;

interface DataProps {
  city: string;
  continent: string;
  countryCode: string;
  countryName: string;
  latitude: number;
  longitude: number;
}

const useReverseGeolocation = (lnt: string | null, lng: string | null) => {
  const [data, setData] = useState<DataProps | null>(null);
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          `${URL}?latitude=${lnt}&longitude=${lng}&key=${key}`
        );
        const resData = await res.json();
        setData(() => resData);
      } catch (err) {
        console.log("%c Error Fetching Big data cloud", "color: red;");
        console.error(err);
      }
    }
    if (lnt != null && lng != null) {
      getData();
    } else {
      console.log("%c Latitude and Longitude are null", "color: red;");
    }
  }, [lnt, lng]);

  return {
    data,
  };
};

export default useReverseGeolocation;
