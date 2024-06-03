"use server"

interface qotd {
    quote: {
        id: number;
        author: string;
        body: string;
    };
}

export async function getRandomQuote() {
    const res = await fetch("https://favqs.com/api/qotd");
    const qotd: qotd = await res.json();

    return qotd;
}