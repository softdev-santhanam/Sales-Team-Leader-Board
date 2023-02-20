import React from "react";

const Bottom = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return (
    <div className="d-flex p-0 justify-content-between align-items-center">
      <div>
        <img
          className="me-3"
          style={{ maxWidth: "6%", maxHeight: "10%" }}
          src="https://play-lh.googleusercontent.com/g5WIaqQ00BCBnBsktGwbBISJDOuDLrn7TEupVk_5gDznboxSvUHs-oxi9zvqXAvdLA"
          alt="icon"
        ></img>
        <span className="fs-5">Sales team leader board</span>
        <span className="fs-6 ps-3 text-end ">Powered by Lystloc</span>
      </div>

      <div className="fs-3">{`${hours}:${minutes}`}</div>
    </div>
  );
};

export default Bottom;
