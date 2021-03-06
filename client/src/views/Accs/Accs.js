import React, { Component } from 'react';
import { Row } from 'reactstrap';

import { renderUsers } from '../../views/Components/UserCard';

import { getApi, initialFetch } from '../../func/func';

export default class Accs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {},
      initialDone: false
    }
  }

  componentWillMount() {
    initialFetch.call(this, getApi());
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    console.log(this.state);
    return (
      <div className="animated fadeIn">
        <Row>
          {renderUsers.call(this, this.state.users)}
        </Row>
      </div>
    )
  }
}
