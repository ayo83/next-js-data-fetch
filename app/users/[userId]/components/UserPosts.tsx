type Props = {
    allPosts: Promise<Post[]>
}

export default async function UserPosts({ allPosts }: Props) {
    const posts = await allPosts
     const content  = posts.map(post => {
        return (
            <article key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <br />
            </article>
        )
    });
    return content;
}

