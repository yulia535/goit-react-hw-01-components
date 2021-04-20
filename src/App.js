import Profile from './components/Profile/Profile';
import user from './jsonData/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './jsonData/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './jsonData/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './jsonData/transactions.json';

const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
export default App;
