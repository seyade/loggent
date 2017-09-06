import React from 'react';

const RolesList = ({ title, agent, agency, phone, email, description, createdAt, index }) => {
  return (
    <article className="role">
      <span className="role__index">{index+1}</span>
      <h2 className="role__title">{title}</h2>
      <p className="role__agent-info">
        <span className="role__agent">{agent}</span> | <span className="role__agency">{agency}</span> | <span className="role__call-time">{createdAt} <span className="fa fa-clock-o"></span></span>
      </p>
      <p className="role__phone">{phone}</p>
      <p className="role__email">{email}</p>
      <p className="role__description">{description}</p>
      <button className="btn btn-danger btn-sm">Close</button>  <button className="btn btn-primary btn-sm">View more</button>
    </article>
  );
};

export default RolesList;
