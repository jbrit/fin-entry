import React, { useState } from "react";
import { List } from "antd";

interface Props {
  entryName: String;
  start: number;
  end: number;
}

function* makeRangeIterator(start: number, end: number) {
  let iterationCount = 1;
  for (let i = start; i <= end; i++) {
    iterationCount++;
    yield i;
  }
  return iterationCount;
}

const EntryList = ({ start, end, entryName }: Props) => {
  const [selected, setSelected] = useState("");
  const list = Array.from(makeRangeIterator(start, end)).map(
    (entry) => `${entryName}${entry}`
  );
  return (
    <List
      size="large"
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          style={{
            backgroundColor: selected === item ? "lightgray" : "white",
          }}
          onClick={(e) => {
            setSelected(item);
            console.log(selected);
          }}
          className="list-item"
        >
          {item}
        </List.Item>
      )}
    />
  );
};

export default EntryList;
