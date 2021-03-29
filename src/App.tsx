import React, { useState } from "react";
import logo from "./img/logo.png";

import { Switch, Typography, Row } from "antd";
import EntryList from "./components/EntryList";

import { Mode, Colors } from "./constants";

const { Title } = Typography;

const App = () => {
  const [mode, setMode] = useState(Mode.App);

  const onModeChange = (checked: boolean) => {
    setMode(checked ? Mode.Admin : Mode.App);
    document.documentElement.style.setProperty(
      "--bg-color",
      Colors[checked ? Mode.Admin : Mode.App]
    );
  };

  return (
    <div className="App">
      <Row className="header-row" justify="end" align="middle">
        <div className="logo-container">
          <img className="logo" src={logo} alt="Fin-Entry Logo" />
        </div>
        <Switch
          checkedChildren="Admin"
          unCheckedChildren="App"
          onChange={onModeChange}
        />
      </Row>
      <div className="container">
        <Title style={{ color: "white", textAlign: "center" }}>
          {mode === Mode.App ? "App" : "Admin"} Dashboard
        </Title>
        {mode === Mode.App ? (
          <EntryList entryName="Entry" start={1} end={5} />
        ) : (
          <EntryList entryName="AdminEntry" start={1} end={3} />
        )}
      </div>
    </div>
  );
};

export default App;
