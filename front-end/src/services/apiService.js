
export const myCustomApiService = {
    fetchRecipes: () => {
      return fetch('http://localhost:4000/data/recipes') // Replace with your API endpoint
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch recipes');
          }
          return response.json();
        });
    },
  };