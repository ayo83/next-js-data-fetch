import type {Metadata} from 'next';
import getAllUsers from '@/lib/getAllUsers';
import Link from 'next/link';

// Static Metadata
export const metadata: Metadata = {
    title: 'users'
}

async function UsersPage() {
    const usersData: Promise<User[]> = getAllUsers();

    const users = await usersData;

    // console.log(users)
  return (
    <section>
        <h2>
            <Link href="/">Back to Home</Link>
        </h2> <br />
        {/* Load Users  */}
        <h3>LIST OF USERS</h3>
        {users.map(user => {
            return (
                <>
                    <p key={user.id}>
                       <Link href={`/users/${user.id}`}>{user.username}</Link>
                    </p>
                </>
            )
        })}
    </section>
  )
}

export default UsersPage
