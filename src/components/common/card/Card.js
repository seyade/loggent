import React from 'react';
import moment from 'moment';
import { truncate } from '../../../helpers/stringy';
import './Card.scss';

const Card = ({ title, agent, agency, phone, email, description, createdAt, index, id, deleteCard }) => {
  let momentCreatedAt = moment(createdAt),
    formattedTime = momentCreatedAt.format('LT').toLowerCase(),
    formattedDate = momentCreatedAt.format('DD.MM.YY');

  return (
    <article className="card role">
      <span className="role__index">{index + 1}</span>
      <h2 className="role__title">
        <span className="role__title-main">{truncate(title, 20)}</span>
      </h2>

      <section className="role__agent-info">
        <span className="role__agent">{agent}&nbsp;</span> &nbsp;|&nbsp; <span className="role__agency">&nbsp;{truncate(agency, 12)}</span>
      </section>

      <section className="role__section role__call-info">
        <span className="fa fa-phone card__icon"></span>
        <p className="role__call-phone"><a href={'tel:' + phone.replace(/\s+/gi, '')}>{phone}</a></p>
        <p className="role__call-time">
           <strong>Date</strong> {formattedDate} @ {formattedTime}
        </p>
      </section>

      <section className="role__section role__email">
        <span className="fa fa-at card__icon"></span>
        <p className="role__email-text">{truncate(email, 23)}</p>
      </section>

      <section className="buttons clearfix">
        <div className="hero-gradient">
          <div id="wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1170 193">
              <path d="M1175 131.2c0 0-81-89.4-224.3-103.4S713 72 665 97c-86 46-148 63-271 7C221.7 25.5 56 104.5-4 197.4 -4 58.7-3.3 0.3-3.3 0.3L1175 0V131.2z"></path>
            </svg>
          </div>
        </div>

        <button className="buttons__btn buttons--save">view more</button>
        <button className="buttons__btn buttons--close" onClick={deleteCard(id)}> delete</button>
      </section>
    </article>
  );
};

export default Card;
