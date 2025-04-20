const BASE_URL = "https://jsonplaceholder.typicode.com/";

export async function fetchPosts() {
  const response = await fetch(`${BASE_URL}/posts`);
  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }
  return await response.json();
}
