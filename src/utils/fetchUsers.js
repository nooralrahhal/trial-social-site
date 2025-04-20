const BASE_URL = "https://jsonplaceholder.typicode.com/";

export async function fetchUsers() {
  const response = await fetch(`${BASE_URL}/users`);
  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }
  return await response.json();
}
