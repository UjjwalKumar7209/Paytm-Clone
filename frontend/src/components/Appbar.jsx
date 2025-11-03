
import { useNavigate } from 'react-router-dom';

export default function Appbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/signin");
    };

    return <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4">
            PayTM App
        </div>
        <div className="flex items-center">
            <div className="flex items-center gap-4 mr-4">
                <button
                    onClick={handleLogout}
                    className="hover:bg-slate-100 px-3 py-1 rounded-md text-red-600"
                >
                    Logout
                </button>
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    U
                </div>
            </div>
        </div>
    </div>
}