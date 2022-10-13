import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("owais");
  const [otherUsername, setOtherUsername] = useState("calvin");
  return (
    <>
      <User username={username} updateUsername={setUsername} />
      <User username={otherUsername} updateUsername={setOtherUsername} />
    </>
  );
}

function User({ username, updateUsername }) {
  return (
    <div>
      Username: {username}
      <UsernameEditor username={username} updateUsername={updateUsername} />
    </div>
  );
}

function UsernameEditor({ username, updateUsername }) {
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => updateUsername(e.target.value)}
      />
    </div>
  );
}
