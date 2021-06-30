const address = "http://localhost:3000";

fetch(`${address}/fetchData`)
  .then((response) => response.json())
  .then((data) => {
    const chat = data.map((instance) => instance.message).join("\n");
    document.getElementById("chat").innerHTML = chat;
  });

const sentMessage = async () => {
  const msg = document.getElementById("chatMsg").value;
  await fetch(`${address}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "no-cors",
    body: JSON.stringify({ message: msg }),
  });
};
