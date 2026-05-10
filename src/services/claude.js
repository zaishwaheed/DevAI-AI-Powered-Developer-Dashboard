const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
}

export const generateSummary = async (user, repos, events) => {
    const languages = repos
        .map(repo => repo.language)
        .filter(Boolean);

    const recentPushes = events
        .filter(event => event.type === 'PushEvent')
        .slice(0, 5); // only last 5

    const prompt = `
  Analyze this GitHub developer and provide a brief, insightful summary:
  
  Name: ${user.name} (@${user.login})
  Bio: ${user.bio || 'No bio'}
  Public Repos: ${user.public_repos}
  Followers: ${user.followers} | Following: ${user.following}
  
  Top Languages: ${[...new Set(languages)].join(', ')}
  Recent Repos: ${repos.slice(0, 5).map(repo => repo.name).join(', ')}
  Recent Push Activity: ${recentPushes.map(e => e.repo.name).join(', ')}
  
  Write a 3-4 sentence professional summary of this developer's activity and focus areas.
`

    try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers,
            body: JSON.stringify({
                model: "llama-3.1-8b-instant",
                messages: [{ role: "user", content: prompt }],
                max_tokens: 1000
            })
        });

        const data = await response.json();
        return data?.choices?.[0]?.message?.content || "Unable to generate summary at this time.";
    } catch (error) {
        console.error('AI Summary failed:', error);
        return "Unable to generate summary at this time.";
    }
}
