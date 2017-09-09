import React from 'react';
import Card from '../common/card/Card';

const RolesList = (props) => {
  return (
    <div className="role-list">
    {
      (props.roles.length < 1) ? <p className="warning-msg"><span className="fa fa-warning"></span> You haven't applied for any job or you're offline!</p> :
        props.roles.map((role, i) => <Card {...role} index={i} key={i}/>)
    }
    </div>
  );
};

export default RolesList;
