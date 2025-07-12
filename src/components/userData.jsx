export default function UserData(){
    const user = JSON.parse(localStorage.getItem("user")); // make sure it's stored as JSON string
    return(
        <div className="flex items-center gap-2">
            <h1 className="text-[18px] font-semibold">{user?.name || "User"}</h1>
            <button
              className="text-red-500 font-bold"
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                window.location.href = "/";
              }}
            >
              Logout
            </button>
        </div>
    )
}
