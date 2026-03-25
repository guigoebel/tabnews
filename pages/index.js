function Home() {
  return <ComponentIndex />;
}

function ComponentIndex() {
  const header = "Trip News";
  const headline = "Um novo lugar na internet para quem viaja com informação.";
  const sentence =
    "Estamos neste exato momento construindo um novo lugar na internet para quem viaja e precisa tomar decisões com informação confiável, atualizada e útil no mundo real. O TripNews nasce para transformar experiência em orientação, relato em proteção e comunidade em segurança prática. Aqui, a regra é simples: se uma informação pode evitar prejuízo, risco, perda de tempo ou um problema na estrada, no aeroporto ou na fronteira, ela precisa circular. Se uma mudança pode impactar outro viajante, ela precisa ser compartilhada. E se algo funcionou, protegeu ou facilitou a jornada, isso precisa ser repetido. As pessoas que estão chegando agora entendem que viajar melhor não depende apenas de destino — depende de informação certa, no momento certo, passada por quem realmente vive a rota.";
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>{header}</h1>
      <h3>{headline}</h3>
      <p style={{ maxWidth: "800px", textAlign: "center" }}>{sentence}</p>
    </div>
  );
}

export default Home;
