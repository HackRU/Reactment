import React, { useState } from "react";

export default function Profile({ name }) {
  const [gender, setGender] = useState("unknown");
  const [phone, setPhone] = useState("unknown");

  fetch("https://randomuser.me/api/", { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      const fetchedData = data["results"][0];
      if (gender === "unknown") {
        setGender(fetchedData["gender"]);
        setPhone(fetchedData["phone"]);
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  return (
    <div
      style={{ marginTop: "10rem", display: "flex", justifyContent: "center" }}
    >
      <div style={{ display: "block" }}>
        <p>Name: {name}</p>
        <p>Gender: {gender}</p>
        <p>Phone: {phone}</p>
      </div>
    </div>
  );
}
