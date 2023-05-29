export async function fetchCardData() {
  try {
    const response = await fetch("https://run.mocky.io/v3/42b6aab7-bafb-4831-a863-d160c9305c3e");
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
