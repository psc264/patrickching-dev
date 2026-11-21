export async function POST({ request }) {
    const { prompt } = await request.json();

    return Response.json({
        answer: `Azure API received: ${prompt}`,
    });
}