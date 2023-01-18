export async function fetchImages() {
    const response = await fetch(
      // `https://dog.ceo/api/breeds/image/random`
      `https://aws.random.cat/meow`
    );
    const data = await response.json();
    return data.file;
  }