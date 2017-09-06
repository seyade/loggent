import React from 'react';
import moment from 'moment';

const Card = ({ title, agent, agency, phone, email, description, createdAt, index }) => {

  return (
    <article className="role">
      <span className="role__index">{index + 1}</span>
      <h2 className="role__title">
        <span className="role__title-main"><span className="fa fa-circle"></span> {title}</span>
      </h2>
      <p className="role__agent-info">
        <span className="role__agent"><span className="fa fa-user-o"></span> {agent}&nbsp;</span> &nbsp;|&nbsp; <span className="role__agency">&nbsp;{agency}</span>
      </p>
      <p className="role__call-time"><span className="fa fa-clock-o"></span> {moment(createdAt).format('LT')}</p>
      <section className="role__contact">
        <p className="role__phone"><span className="fa fa-phone"></span> {phone}</p>
        <p className="role__email"><span className="fa fa-at"></span> {email}</p>
      </section>
      <p className="role__description">{description}</p>
      <section className="buttons clearfix">
        <button className="buttons__btn buttons--close">
          <span className="fa fa-close"></span> close
        </button>
        <button className="buttons__btn buttons--save">
          <span className="fa fa-info"></span> view more
        </button>
      </section>
    </article>
  );
};

export default Card;
