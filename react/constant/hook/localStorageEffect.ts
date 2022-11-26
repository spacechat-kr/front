const isServer = typeof window !== "undefined";

export const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    if (isServer) {
      const savedValue = localStorage.getItem(key);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }
    }
    onSet((newValue: any) => {
      if (isServer) localStorage.setItem(key, JSON.stringify(newValue));
    });
  };
