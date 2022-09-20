import { useEffect, useState } from "react";
import { baseUrl } from "./API/config";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "./store";

interface DataItem {
  id: string;
  title: string;
}

export const ForTest = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const [data12, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const category = async () => {
      const { data } = await axios.get(`${baseUrl}/category`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      });

      const formattedData = data.map((item: any) => {
        return {
          id: item.id,
          title: item.title,
        };
      });
      setData(formattedData);
    };
    category();
  }, []);

  return (
    <>
      <div>For Test</div>
      <div>
        {data12.map((o: any) => {
          return <span>" {o.title} "</span>;
        })}
      </div>
    </>
  );
};

export default ForTest;
