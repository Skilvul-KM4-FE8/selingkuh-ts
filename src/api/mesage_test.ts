export const messageTest = async (message: string) => {
    const response = await fetch("/api/message_test", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            message: message,
        }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message");
    }

    const data: string = await response.json();

    return data;
}