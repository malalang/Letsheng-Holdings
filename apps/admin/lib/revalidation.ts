export async function triggerRevalidation(options: { path?: string; tag?: string }) {
  const clientUrl = process.env.NEXT_PUBLIC_CLIENT_URL;
  const secret = process.env.REVALIDATION_SECRET;

  if (!clientUrl || !secret) {
    console.warn('REVALIDATION_SECRET or NEXT_PUBLIC_CLIENT_URL not set. Skipping revalidation.');
    return;
  }

  try {
    const response = await fetch(`${clientUrl}/api/revalidate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-revalidate-secret': secret,
      },
      body: JSON.stringify(options),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Failed to trigger revalidation:', errorData);
    }
  } catch (error) {
    console.error('Error triggering revalidation:', error);
  }
}
