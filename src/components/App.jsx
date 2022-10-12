import { Profile } from './user/user';
import { Statistic } from './statistics/statistic';
import { Friends } from 'components/friends/friends';
import { Transactions } from './transactions/transactions';
import profile from '../../src/profile.json';
import statistic from '../../src/statistisc.json';
import friends from '../../src/friends.json';
import transactions from '../../src/transactions.json';

export const App = () => {
  return (
    <>
      <Profile profile={profile} />
      <Statistic title="Upload stats" statistic={statistic} />
      <Friends friends={friends} />
      <Transactions transactions={transactions} />
    </>
  );
};
