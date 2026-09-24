import { useEffect, useState } from "react";
import diaryServices from "./diaryServices";
import { type Weather, type Diary, Visibility } from "./types";
import axios from "axios";

const App = () => {
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const [date, setDate] = useState("");
  const [visibility, setVisibility] = useState("");
  const [weather, setWeather] = useState("sunny");

  const [errorMsg, setErrorMsg] = useState("");

  //const [newDiary, setNewDiary] = useState();
  console.log(diaries[2]);

  useEffect(() => {
    diaryServices.getAll().then((res) => setDiaries(res));
  }, []);

  const addDiary = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newDiary = {
      id: diaries.length + 1,
      date,
      weather: weather as Weather,
      visibility: visibility as Visibility,
    };
    try {
      const returnedObj = await diaryServices.create(newDiary);
      setDiaries(diaries.concat(returnedObj));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.status);
        setErrorMsg("Error: " + error.response?.data.error[0].message);
        setTimeout(() => {
          setErrorMsg("");
        }, 7000);
      } else {
        console.error(error);
      }
    }
    setDate("");
    setWeather("");
    setVisibility("");
  };

  return (
    <div>
      {errorMsg && (
        <div style={{ color: "red", fontSize: 18 }}> ⚠️ {errorMsg}</div>
      )}
      <br /> <h3>Diary entries</h3>
      <table style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #0e0c0caa" }}>
            {/* <th style={{ padding: "10px", paddingLeft: "20px" }}>id</th> */}
            <th style={{ padding: "10px", paddingLeft: "20px" }}>date</th>
            <th style={{ padding: "10px", paddingLeft: "20px" }}>weather</th>
            <th style={{ padding: "10px", paddingLeft: "20px" }}>visibility</th>
          </tr>
        </thead>
        <tbody>
          {diaries.map((d) => (
            <tr key={d.id} style={{ borderBottom: "1px solid #0e0c0caa" }}>
              {/* <td style={{ padding: "10px", paddingLeft: "20px" }}>{d.id}</td> */}
              <td style={{ padding: "10px", paddingLeft: "20px" }}>{d.date}</td>
              <td style={{ padding: "10px", paddingLeft: "20px" }}>
                {d.weather}
              </td>
              <td style={{ padding: "10px", paddingLeft: "20px" }}>
                {d.visibility}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <div>
        <form onSubmit={addDiary}>
          <h3>Add a new entry</h3>
          <div>
            date
            <input
              type="date"
              min="2022-01-01"
              max="2050-12-30"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <br />

          <div>
            <strong>weather: </strong>
            <label htmlFor="sunny" style={{ marginLeft: "17px" }}>
              Sunny
            </label>
            <input
              type="radio"
              value="sunny"
              name="weatherGroup"
              onChange={(e) => setWeather(e.target.value)}
              checked={weather === "sunny"}
            />
            <label htmlFor="rainy" style={{ marginLeft: "17px" }}>
              Rainy
            </label>
            <input
              type="radio"
              value="rainy"
              name="weatherGroup"
              onChange={(e) => setWeather(e.target.value)}
              checked={weather === "rainy"}
            />
            <label htmlFor="cloudy" style={{ marginLeft: "17px" }}>
              Cloudy
            </label>
            <input
              type="radio"
              value="cloudy"
              name="weatherGroup"
              onChange={(e) => setWeather(e.target.value)}
              checked={weather === "cloudy"}
            />
            <label htmlFor="stormy" style={{ marginLeft: "17px" }}>
              Stormy
            </label>
            <input
              type="radio"
              value="stormy"
              name="weatherGroup"
              onChange={(e) => setWeather(e.target.value)}
              checked={weather === "stormy"}
            />

            <label htmlFor="windy" style={{ marginLeft: "17px" }}>
              Windy
            </label>
            <input
              type="radio"
              value="windy"
              name="weatherGroup"
              onChange={(e) => setWeather(e.target.value)}
              checked={weather === "windy"}
            />
          </div>

          <br />
          <div>
            <strong>visibility: </strong>{" "}
            <label htmlFor="great" style={{ marginLeft: "17px" }}>
              Great
            </label>
            <input
              type="radio"
              value="great"
              name="visibilityGroup"
              onChange={(e) => setVisibility(e.target.value)}
              checked={visibility === "great"}
            />
            <label htmlFor="good" style={{ marginLeft: "17px" }}>
              Good
            </label>
            <input
              type="radio"
              value="good"
              name="visibilityGroup"
              onChange={(e) => setVisibility(e.target.value)}
              checked={visibility === "good"}
            />
            <label htmlFor="ok" style={{ marginLeft: "17px" }}>
              Ok
            </label>
            <input
              type="radio"
              value="ok"
              name="visibilityGroup"
              onChange={(e) => setVisibility(e.target.value)}
              checked={visibility === "ok"}
            />
            <label htmlFor="poor" style={{ marginLeft: "17px" }}>
              Poor
            </label>
            <input
              type="radio"
              value="poor"
              name="visibilityGroup"
              onChange={(e) => setVisibility(e.target.value)}
              checked={visibility === "poor"}
            />
          </div>
          <br />
          <button type="submit">add </button>
        </form>
      </div>
    </div>
  );
};

export default App;
