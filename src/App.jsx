import { useState } from "react";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import Form from "./components/Form";

const App = () => {
  const [user, setUser] = useState();
  const hasUser = Boolean(user);

  return (
    <div className="h-screen">
      <Header user={user} />
      {hasUser && <ArticleList />}
      {!hasUser && <Form onSubmit={setUser} />}
    </div>
  );
};

export default App;
