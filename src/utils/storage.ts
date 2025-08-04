export const storage = {
    get<T>(key: string): T | null {
        if (typeof window === "undefined") return null;
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error(`Error reading localStorage key “${key}”:`, error);
            return null;
        }
    },

    set<T>(key: string, value: T): void {
        if (typeof window === "undefined") return;
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`Error setting localStorage key “${key}”:`, error);
        }
    },

    remove(key: string): void {
        if (typeof window === "undefined") return;
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error(`Error removing localStorage key “${key}”:`, error);
        }
    },
};
