import { useContext, useState, useEffect } from "react";
import HeaderTitle from "../components/HeaderTitle";
import Table from "../components/Table";
import dataContext from "../hooks/dataContext";

export default function MainPage() {
  const dataCon = useContext(dataContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(dataCon);
  }, [dataCon])

  return (
    <div>
      <HeaderTitle />
      <Table />
    </div>
  );
}
