import { http } from "@/utils";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface IAuthContext {
  isAuth: boolean;
  setisAuth: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  authType: AuthType;
  setAuthType: Dispatch<SetStateAction<AuthType>>;
  user: {
    id: number;
    email: string;
    name: string;
  };
  setUser: Dispatch<
    SetStateAction<{
      id: number;
      email: string;
      name: string;
    }>
  >;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}

const AuthContext = createContext<Partial<IAuthContext>>({});

export const useAuthContext = (): Partial<IAuthContext> =>
  useContext(AuthContext);

const AuthProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [isAuth, setisAuth] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [token, setToken] = useState("");
  const [authType, setAuthType] = useState(AuthType.Login);
  const [user, setUser] = useState({
    id: 0,
    email: "",
    name: "",
  });

  useEffect(() => {
    const _token = localStorage.getItem("token");
    const _user = localStorage.getItem("user");
    if (_user) {
      setUser(JSON.parse(_user));
      setisAuth(true);
      setToken(_token?.replaceAll('"', "") || "");
    }
    http.interceptors.request.use(
      (config) => {
        config.headers["Authorization"] = `Bearer ${_token?.replaceAll(
          '"',
          ""
        )}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setisAuth,
        showModal,
        setShowModal,
        authType,
        setAuthType,
        user,
        setUser,
        token,
        setToken
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
