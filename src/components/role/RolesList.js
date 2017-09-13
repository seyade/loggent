import React from 'react';
import Card from '../common/card/Card';

const RolesList = (props) => {

  const deleteCard = (id) => {
    console.log('Role to delete id', id);
  };

  return (
    <div className="role-list">
    {
      (props.roles.length < 1) ?
        <p className="warning-msg">Loading...</p> :
        props.roles.map((role, i) => {
          console.log('Role in list', role);
          return <Card {...role} index={i} key={i} deleteCard={deleteCard}/>
        })
    }
    </div>
  );
};

export default RolesList;
