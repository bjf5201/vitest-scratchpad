export function log(message: string): void {
    if (import.meta.env.MODE !== "production") {
        console.log(message);
    } else {
        
    }
}