import * as React from "react";

import styles from "./App.module.scss";

import ServerBox from "./ServerBox";

const App: React.FC = () => {
  return (
    <main className={styles.container}>
      {/* bad request to force error */}
      {[1, 2, 3, 4, 5, "//"].map((id) => (
        <ServerBox key={id} id={id} />
      ))}
    </main>
  );
};

export default App;
