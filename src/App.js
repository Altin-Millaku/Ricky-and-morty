import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { I18nextProvider } from 'react-i18next';
import client from './apollo/Client';
import i18n from './i18n';
import CharacterList from './components/CharacterList';
import Footer from './components/Footer';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ApolloProvider client={client}>
        <div className="App">
          <CharacterList />
          <Footer />
        </div>
      </ApolloProvider>
    </I18nextProvider>
  );
}

export default App;
