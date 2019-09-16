import React from 'react';
import { Link } from 'react-router-dom';
import LogoBtn from '../../components/LogoBtn';
import data from '../../data/data.json'


class Sagas extends React.Component {
  render() {
    console.log(data)
    return (
      <div className="user-container">
      HOlis soy una saga
      {Object.keys(data).map(name => 
      <Link key={name} to={`/sagas/${name}`}>
        <LogoBtn name={name}  />
      </Link>)}
      <LogoBtn  />
      </div>
    );
  }
}

export default Sagas;
