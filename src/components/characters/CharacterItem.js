import React from "react";

const CharacterItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.image_url} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.localized_name}</h1>
          <ul>
            <li>
              <strong>Hero Name:</strong> {item.name}
            </li>
            <li>
              <strong>Hero ID:</strong> {item.id}
            </li>
            <li>
              <strong>Localized Name:</strong> {item.localized_name}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
