import React from "react";

function Greeting({ name }) {
  return <h1>Привіт, {name}!</h1>;
}

function Message({ text }) {
  return <p>{text}</p>;
}

function Button({ onClick }) {
  return <button onClick={onClick}>Натисни мене</button>;
}

function App() {
  const handleClick = () => {
    console.log("Кнопка була натиснута!");
  };

  return (
    <div>
      <Greeting name="Іван" />
      <Message text="Це довільне повідомлення" />
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
