import React from "react";

const ChangeDate = (title, callback) => {
  return (
    <button className="change-date" onClick={callback}>
      <i class="far fa-calendar-alt" />
      {title}
    </button>
  );
};

export default ChangeDate;
