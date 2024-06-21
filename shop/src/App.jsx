import { useEffect, useState } from "react"
import Products from "./components/Products";

const api = "http://localhost:8080/home";

export default function App() {
    const [ data, setData ] = useState([]);

    useEffect(() => {
      (async () => {
        const res = await fetch(api);

        setData(await res.json());
      })()
    }, []);

    return (
        <div>
          <ul>
            {data.map(product => {
              return (<Products key={product._id} product={product}/>)
            })}
          </ul>
        </div>
    )
}