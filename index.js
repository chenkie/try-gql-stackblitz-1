import gql from 'graphql-tag';

const query = gql`
  {
    contacts {
      id
      firstName
      lastName
      description
      image
    }
  }
`;

import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Contact from './Contact';

import { ApolloProvider } from 'react-apollo';
import { Query } from 'react-apollo';

import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://api.trygql.com'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Query query={query}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return data.contacts.map(c => <Contact contact={c} />);
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
