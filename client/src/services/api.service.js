export async function fetchApi(url) {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`Erreur réseau: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
      throw error; 
    }
  }
  
  const productsUrl = "/api/products";
  
  export async function productsLoader() {
    try {
      const products = await fetchApi(productsUrl);
      if (!Array.isArray(products)) {
        throw new Error("Les données récupérées ne sont pas un tableau");
      }
      return products;
    } catch (error) {
      console.error("Erreur lors du chargement des produits :", error);
      throw error;
    }
  }
  