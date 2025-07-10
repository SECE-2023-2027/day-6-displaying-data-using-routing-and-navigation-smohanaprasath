import React from 'react';

const dummyUsers = [
  { id: 1, name: 'Alice', email: 'alice@email.com' },
  { id: 2, name: 'Bob', email: 'bob@email.com' },
  { id: 3, name: 'Charlie', email: 'charlie@email.com' }
];

const UserList = () => {
  return (
    <ul>
      {dummyUsers.map(user => (
        <li key={user.id}>
          <strong>{user.name}</strong> - {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
