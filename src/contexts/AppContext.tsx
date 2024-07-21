import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface AppContextProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContext = createContext<Partial<AppContextProps>>({
  show: false,
  setShow: () => {},
});

export default function AppContextProvider({
  children,
}: AppContextProviderProps) {
  const [show, setShow] = useState<boolean>(false);
  return (
    <AppContext.Provider value={{ show, setShow }}>
      {children}
    </AppContext.Provider>
  );
}
