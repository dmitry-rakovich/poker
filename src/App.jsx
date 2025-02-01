import Spinner from './components/Spinner';
import PlayerInfo from './components/PlayerInfo';
import Loader from './components/Loader';
import TournamentItem from './components/TournamentItem';
import { TOURNAMENTS } from './mock-data';

function App() {
  return (
    <>
      <h1>Poker</h1>
      <Spinner />
      <PlayerInfo />
      <Loader />
      {
        TOURNAMENTS.map(tournament => (
          <TournamentItem key={tournament.title} tournament={tournament} />
        ))
      }
    </>
  )
}

export default App
