// OPENAI URL AND HEADERS

const openAIHeaders = {
    'Content-Type': 'application/json',
    'Authorization': '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'
};

async function createEmbedding(texttoEmbed) {
    try {
        let response = await fetch('https://api.openai.com/v1/embeddings', {
            method: 'POST',
            headers: openAIHeaders, // Use the headers variable, not a string
            body: JSON.stringify({
                'model': 'text-embedding-ada-002',
                'input': texttoEmbed
            })
        });

        if (response.ok) {
            let data = await response.json(); // Use await to get the JSON data
            console.log(data);
            return data;
        } else {
            console.error('Error:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

createEmbedding("Hello World"); // Corrected function name to match the function declaration
