import { useEffect, useState } from "react";

const App = () => {
  const [state, setState] = useState([]);
  const [searchState, setSearch] = useState([]);
  const [doTask, setDoTask] = useState(true);
  const handleFetch = () => {
    fetch("https://dummyjson.com/products")
      .then((e) => e.json())
      .then((res) => {
        setState(res.products);
        setSearch(res.products);
      });
  };

  const handleChange = (item) => {
    setSearch([...state.filter((e) => e.title.includes(item))]);
    console.log(state.filter((e) => e.title.includes(item)));
  };
  useEffect(() => {
    if (doTask) {
      handleFetch();
    }
  }, []);
  useEffect(() => {
    return () => {
      setDoTask(false);
    };
  }, []);
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <input
          style={{
            marginBottom: 30
          }}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search for Products"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {searchState.map((e) => {
          return (
            <div
              key={e.id}
              className="Container"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "1px solid grey",
                width: "550px"
              }}
            >
              <div className="img" style={{ width: "40%" }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={e.thumbnail}
                  alt={e.title}
                />
              </div>
              <div
                style={{ width: "60%", paddingLeft: "30px" }}
                className="details"
              >
                <p>
                  title: <b>{e.title}</b>
                </p>
                <p>description: {e.description}</p>
                <p>price: {e.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default App;