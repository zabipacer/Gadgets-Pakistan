const BASE_URL = "https://gadgetswoocommerce.local/wp-json/wc/v3";
const CONSUMER_KEY = "ck_d7a4dbe881abcda743b2b0d508065e98a127fcca";
const CONSUMER_SECRET = "cs_6caf9109df1ef6d7f65e7d3ec3a8ae48d82efa3b";

export const addToWooCart = async (productId, quantity = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/cart/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(`${CONSUMER_KEY}:${CONSUMER_SECRET}`)}`,
      },
      body: JSON.stringify({
        id: productId,
        quantity,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding to WooCommerce cart:", error);
  }
};
