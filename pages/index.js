function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        Em Construção
      </h1>
      <p
        style={{
          fontSize: "1.5rem",
          maxWidth: "600px",
          lineHeight: "1.6",
          color: "#666",
        }}
      >
        Aqui será construído um ambiente para discussões gamers, onde você
        poderá compartilhar suas experiências, debater sobre seus jogos
        favoritos e conectar-se com outros entusiastas do mundo dos games.
      </p>
    </div>
  );
}

export default Home;
