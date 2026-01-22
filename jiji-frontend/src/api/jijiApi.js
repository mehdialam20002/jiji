export async function askJiji(query) {
  const response = await fetch("https://jiji-backend-jx4e.onrender.com/ask-jiji", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  });

  return response.json();
}
