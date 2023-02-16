const { createContext } = require("react");

export const UserContext = createContext({});

export const UserProvider = ({ children }) => { //
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        axios.get("/user").then((res) => {
        setUser(res.data);
        });
    }, []);
    
    return (
        <UserContext.Provider value={{ user, setUser }}>
        {children}
        </UserContext.Provider>
    );
    }