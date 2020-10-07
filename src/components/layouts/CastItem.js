import React from "react";
import { Card } from "antd";
import noprofile from "../../images/no-profile-pix.jpg";

const CastItem = ({ item }) => {
  const { name, character, profile_path } = item;
  return (
    <Card
      style={{ width: "100%", borderRadius: "10px" }}
      bodyStyle={{ padding: 0 }}
    >
      <div className="custom-image">
        <img
          style={{
            maxHeight: "150px",
            objectFit: "cover",
            borderRadius: "10px",
            width: "100%",
          }}
          alt={name}
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500/${profile_path}`
              : noprofile
          }
        />
      </div>
      <div className="custom-card">
        <h6>{name}</h6>
        <p>{character}</p>
      </div>
    </Card>
  );
};

export default CastItem;
