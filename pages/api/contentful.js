// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default class contentful {
  // Peticiones a la API de Contentful
  static async callContentful(query) {
    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CF_SPACE_ID}`;

    const fetchOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CF_DELIVERY_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    };

    try {
      const data = await fetch(fetchUrl, fetchOptions).then((response) =>
        response.json()
      );
      return data;
    } catch (error) {
      throw new Error("Error al traer los datos");
    }
  }

  // Card de juegos
  static async getDataCardJuegos() {
    const query = `
    {
      productCollection {
        total
        items{
          titulo
          img{
            url
          }
          slug
        }
      }
    }
    `;

    const response = await this.callContentful(query);
    const data = response.data.productCollection;

    return data;
  }

  // Card de peliculas
  static async getDataCardPeliculas() {
    const query = `
    {
      moviesCollection {
        total
        items {
          titulo
          img {
            url
          }
          slug
        }
      }
    }
    `;

    const response = await this.callContentful(query);
    const data = response.data.moviesCollection;

    return data;
  }

  // Obtener slug de juegos
  static async getSlugJuegos() {
    const query = `
    {
      productCollection {
        items{
          slug
          titulo
        }
      }
    }
    `;

    const response = await this.callContentful(query);
    const data = response.data.productCollection;

    return data;
  }

  // Obtener slug de peliculas
  static async getSlugPeliculas() {
    const query = `
    {
      moviesCollection {
        items{
          slug
          titulo
        }
      }
    }
    `;

    const response = await this.callContentful(query);
    const data = response.data.moviesCollection;
    return data;
  }

  // Obtener datos de un juego
  static async getDataJuego(slug) {
    const query = `
    {
      productCollection(where: {slug: "${slug}"}) {
        items{
          titulo
          img{
            url
          }
          slug
        }
      }
    }
    `;

    const response = await this.callContentful(query);
    const data = response.data.productCollection;

    return data;
  }

  // Obtener datos de una pelicula
  static async getDataPelicula(slug) {
    const query = `
    {
      moviesCollection(where: {slug: "${slug}"}) {
        items{
          titulo
          img{
            url
          }
          slug
        }
      }
    }
    `;

    const response = await this.callContentful(query);
    const data = response.data.moviesCollection;

    return data;
  }
}
