import type { Metadata } from 'next';
import getUser from '@/lib/getUser';
import Link from 'next/link';
import Image from 'next/image';
import UserPosts from './components/UserPosts';
import getUserPosts from '@/lib/getUserPosts';
import { Suspense } from 'react';

type Params = {
    params: {
        userId: string
    }
}

// Dynamically Generate Meta data
export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {

    const userData: Promise<User> = getUser(userId)
    const user: User = await userData;

    return {
        title: user.username,
        description: `This is the page of ${user.username}`
    }
}


// Render UI
async function UserPage({ params: { userId } }: Params) {


    const userData: Promise<User> = getUser(userId);
    const userPostsData: Promise<Post[]> = getUserPosts(userId);

    // Parrelel API Fetching
    // const [user, userPosts] = await Promise.all([userData, userPostsData])




    const user: User = await userData;
    const userPosts: Post[] = await userPostsData;
    return (
        <div className='container'>
            <Link href='/users' style={{ fontSize: '12px', padding: '4px', background: 'white', borderRadius: '5px', color: 'black' }}>Back to Users</Link> <br /> <br />
            <div>
                <div>
                    <h2>User Details</h2> <br />
                    <div className='flex items-center'>
                        <Image src='https://cdn.pixabay.com/photo/2016/12/21/00/36/woman-1921883_1280.jpg' alt={user.username} width={100} height={100} className='rounded-full' /><br />

                        <p>username: {user.username}</p><br />
                        <p>Phone Number: <br /> {user.phone}</p>
                    </div>
                </div>
                {/* Load user details */}
            </div> <br /> <br />
            <div >
                <h2>User Posts</h2>
                <Suspense fallback={<h2>Loading.....</h2>}>
                    {userPosts.map(post => {
                        return (
                            <article key={post.id}>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                                <br />
                            </article>
                        )
                    })}
                </Suspense>
                {/* User Posts */}
            </div>
        </div>
    )
}

export default UserPage
