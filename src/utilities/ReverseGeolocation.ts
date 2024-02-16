const URL = "https://api.bigdatacloud.net/data/reverse-geocode";

const ReverseGeolocation = async (lat: string, lng: string) => {
  try {
    const res = await fetch(
      `${URL}?latitude=${lat}&longitude=${lng}&key=${
        import.meta.env.VITE_BIGDATACLOUD_API_KEY
      }`
    );

    if (!res.ok) {
      throw new Error(
        `Error fetching data from bigdatacloud. Status: ${res.status}`
      );
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(
      "%c Error fetching data in bigdatacloud",
      "color: red;",
      error
    );
    throw error; // Hata durumunu yukarı iletebilirsiniz.
  }
};

export default ReverseGeolocation;
