export async function getStaticProps() {
  const allDataCardJuegos = await contentful.getDataCardJuegos();
  const items = allDataCardJuegos.productCollection;

  return {
    props: {
      items,
    },
  };
}

export async function getStaticPaths() {
  const allDataCardJuegos = await contentful.getDataCardJuegos();
  const items = allDataCardJuegos.productCollection;

  const paths = items.items.map((item) => ({}));
}

const GamePage = () => {
  return (
    <div>
      <h1>{game.name}</h1>
    </div>
  );
};

export default GamePage;
