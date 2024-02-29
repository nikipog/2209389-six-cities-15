import MainPage from '../../pages/main-page/main-page';

type AppPageProps = {
  placesToStay: number;
}

function App({placesToStay}: AppPageProps): JSX.Element {
  return (
    <MainPage placesToStay = {placesToStay}/>
  );
}

export default App;
