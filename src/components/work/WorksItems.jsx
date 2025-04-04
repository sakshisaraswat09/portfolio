import React from "react";

const WorksItems = ({ item }) => {
  if (item.isTextOnly) {
    return (
      <div className="work__card work__card--text-only">
        <h3 className="work__title">{item.title}</h3>
        <p className="work__description">{item.description}</p>
      </div>
    );
  }

  return (
    <div className="work__card">
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      {item.description ? (
        <p className="work__description">{item.description}</p>
      ) : (
        <a href={item.link} className="work__button">
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      )}
    </div>
  );
};

export default WorksItems;
