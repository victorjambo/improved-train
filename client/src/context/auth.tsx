import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IAuthContext {
  isAuth: boolean;
  setisAuth: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<Partial<IAuthContext>>({});

export const useAuthContext = (): Partial<IAuthContext> =>
  useContext(AuthContext);

const AuthProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [isAuth, setisAuth] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setisAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
