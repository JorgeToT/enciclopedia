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
      console.log(data);
      return data;
    } catch (error) {
      throw new Error("Error al traer los datos");
    }
  }

  // Total de juegos
  static async getTotal() {
    const query = `
    {
      productCollection {
        total
      }
    }
    `;

    const response = await this.callContentful(query);
    const { data } = response;

    return data;
  }

  // Card de juegos
  static async getDataCardJuegos() {
    const query = `
    {
      productCollection {
        total
        items{
          titulo
          tituloImg{
            url
          }
          slug
        }
      }
    }
    `;

    const response = await this.callContentful(query);
    const { data } = response;

    return data;w
  }
}
