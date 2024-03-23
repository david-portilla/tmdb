export async function fetchData(url: string): Promise<any> {
    const controller = new AbortController();
    const signal = controller.signal;
    let isLoading = false;

    try {
        const response = await fetch(url, { signal });
        isLoading = true;
        if (!response.ok) {
            throw new Error("Network error: Code " + response.status);
        }
        const { results: data } = await response.json();
        isLoading = false;
        return { data, isLoading };
    } catch (e: Object | any) {
        console.error("Error fetching data: ", e.message);
        isLoading = false;
        return { isLoading, error: e.message};
    } finally {
        controller.abort();
    }
}
