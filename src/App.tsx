import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx'
import scss from './app.module.scss'
import Container from '@material-ui/core/Container';
import Cards from './Components/Cards'
import GlobalContextProvider from './Context/GlobalContext'

const App = () => (
  <>
    <CssBaseline />
    <GlobalContextProvider>
      <div className={scss.root}>
        <Container>
          <div className={clsx(scss.title,'tk-brandon-grotesque')}>YOUR POLICIES</div>
          <Cards />
        </Container>
      </div>
    </GlobalContextProvider>
  </>
);

export default App;
