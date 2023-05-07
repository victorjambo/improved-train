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
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  authType: AuthType;
  setAuthType: Dispatch<SetStateAction<AuthType>>;
}

const AuthContext = createContext<Partial<IAuthContext>>({});

export const useAuthContext = (): Partial<IAuthContext> =>
  useContext(AuthContext);

const AuthProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [isAuth, setisAuth] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [authType, setAuthType] = useState(AuthType.Login);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setisAuth,
        showModal,
        setShowModal,
        authType,
        setAuthType,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export enum AuthType {
  Login = "Login",
  Signup = "Signup",
}
