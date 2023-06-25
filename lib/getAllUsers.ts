export default async function getAllUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    if(!response.ok) throw new Error('Failed to fetch data');

    return response.json();
}