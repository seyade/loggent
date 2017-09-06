import React from 'react';
import Card from '../common/Card';

const RolesList = (props) => {
  return (
    <div>
    {
      props.roles.map((role, i) => <Card {...role} index={i} key={i}/>)
    }
    </div>
  );
};

export default RolesList;
