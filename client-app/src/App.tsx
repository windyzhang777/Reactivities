import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
import { Header, List } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/activities")
      .then((res) => setActivities(res.data));
  }, []);

  return (
    <>
      <Header as="h2" content="Reactivities" />
      <List>
        {activities.map((act: any) => (
          <List.Item key={act.id}>{act.title}</List.Item>
        ))}
      </List>
    </>
  );
}

export default App;
