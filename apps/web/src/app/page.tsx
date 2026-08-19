type HealthResponse = {
  status: string;
  service: string;
};

export default async function Home() {
  try {
    const apiUrl = process.env.API_URL;

    if (!apiUrl) {
      throw new Error('API_URL is not configured');
    }

    const response = await fetch(`${apiUrl}/health`);

    if (!response.ok) {
      throw new Error('API health check failed');
    }

    const health: HealthResponse = await response.json();

    return (
      <main>
        <h1>RepoMind AI</h1>
        <p>Understand your codebase with AI.</p>

        <h2>API Status</h2>
        <p>Status: {health.status}</p>
        <p>Service: {health.service}</p>
      </main>
    );
  } catch {
    return (
      <main>
        <h1>RepoMind AI</h1>
        <p>Understand your codebase with AI.</p>

        <h2>API Status</h2>
        <p>Backend unavailable</p>
      </main>
    );
  }
}