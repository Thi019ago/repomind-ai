type HealthResponse = {
  status: string;
  service: string;
};

export default async function Home() {
  try {
    const response = await fetch('http://localhost:3001/health');

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