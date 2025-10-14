import Heading from "../components/Heading";
import Appbar from "../components/Appbar";
import { Users } from "../components/Users";

export default function Dashboard() {
    return (
        <div>
            <Appbar />
            <div className="m-8">
                <Users />
            </div>
        </div>
    )
}