export const fetchPoketmonData = async (id: string) => {
    const apiUrl = "http://localhost:3000/";
    const response = await fetch(`${apiUrl}/api/poketmons/${id}`);
    return response.json();
  };
  