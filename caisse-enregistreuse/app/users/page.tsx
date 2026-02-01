interface User {
  id: number
  name: string
}

export const dynamic = 'force-dynamic'

const UsersPage = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    { cache: 'no-store' }
  )

  const users: User[] = await res.json()

  return (
    <>
      <h1>List of Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <p>{new Date().toLocaleTimeString()}</p>
    </>
  )
}

export default UsersPage
