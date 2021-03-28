import React, { useState } from "react";
import { Switch } from "antd";

enum Mode {
  App,
  Admin,
}

const App = () => {
  const [mode, setMode] = useState(Mode.App);

  const onModeChange = (checked: boolean) => {
    setMode(checked ? Mode.Admin : Mode.App);
  };

  return (
    <div className="App">
      <Switch
        checkedChildren="Admin"
        unCheckedChildren="App"
        onChange={onModeChange}
      />
    </div>
  );
};

export default App;
