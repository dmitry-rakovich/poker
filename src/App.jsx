import Loader from './components/Loader/Loader';
import PlayerInfo from './components/PlayerInfo/PlayerInfo';
import Spinner from './components/Spinner/Spinner';
import TournamentItem from './components/TournamentItem/TournamentItem';
import { TOURNAMENTS } from './mock-data';

function App() {
  return (
    <>
      <h1 className='title'>Poker</h1>
      <Spinner />
      <PlayerInfo />
      <Loader />
      <div className='tournament-list'>
        {
          TOURNAMENTS?.map(tournament => (
            <TournamentItem key={tournament.id} {...tournament} />
          ))
        }
      </div>
    </>
  )
}

export default App
