const KEY = '?client_id=8916c600c3d63929cfbaa7438c0c6b25738fbfdf909247cc82b0e0c9409330ba'
const URL = 'https://api.unsplash.com/photos/'

const fetchImages = async (page) => {
  const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`) //promise를 리턴해야 하므로 async await
  const data = await response.json()
  if (response.status >= 400) {
    throw new Error(data.errors)
  }
  return data
}

const fetchImageStats = async id => {
  const response = await fetch(`${URL}/${id}/statistics${KEY}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export { fetchImages, fetchImageStats }