import React from "react";

export const MenuBar = () => {
  return (
    <>
      <div className="menu-container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            className="profile-icon"
            src={"https://cdn-icons-png.flaticon.com/512/147/147144.png"}
          />
          <img
            className="profile-icon"
            src={
              "https://static.vecteezy.com/system/resources/thumbnails/000/425/085/small/Multimedia__2814_29.jpg"
            }
          />
          <img
            className="profile-icon"
            src={
              "https://static.vecteezy.com/system/resources/thumbnails/000/425/085/small/Multimedia__2814_29.jpg"
            }
          />
          <img
            className="profile-icon"
            src={
              "https://static.vecteezy.com/system/resources/thumbnails/000/425/085/small/Multimedia__2814_29.jpg"
            }
          />
        </div>
      </div>
    </>
  );
};

export default MenuBar;
