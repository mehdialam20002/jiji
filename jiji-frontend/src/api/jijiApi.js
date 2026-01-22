export async function askJiji(query) {
  const response = await fetch("http://localhost:3000/ask-jiji", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  });

  return response.json();
}
