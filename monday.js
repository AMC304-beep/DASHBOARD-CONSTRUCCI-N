// api/monday.js - Proxy seguro para Monday.com GraphQL API
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    const apiKey = process.env.MONDAY_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'MONDAY_API_KEY no configurada en las variables de entorno' });
    }

    const { query, variables } = req.body;
    if (!query) {
        return res.status(400).json({ error: 'Falta la consulta GraphQL' });
    }

    try {
        const mondayResponse = await fetch("https://api.monday.com/v2", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": apiKey
            },
            body: JSON.stringify({ query, variables })
        });

        const data = await mondayResponse.json();
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: 'Error al conectar con Monday API', details: error.message });
    }
}
