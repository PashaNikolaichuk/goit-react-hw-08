const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
  },
};

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Welcome main page</h2>
    </div>
  );
};

export default HomePage;
