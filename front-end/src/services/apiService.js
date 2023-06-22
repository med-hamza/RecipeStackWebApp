
export const myCustomApiService = {
    fetchRecipes: () => {
      return fetch('https://recipe-web-app-ojhn.onrender.com/data/recipes') // Replace with your API endpoint
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch recipes');
          }
          return response.json();
        });
    },
  };