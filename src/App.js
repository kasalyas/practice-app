import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://random-data-api.com/api/color/random_color")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div style={{ backgroundColor: data?.hex_value }}>{data?.color_name}</div>
  );
}

export default App;
