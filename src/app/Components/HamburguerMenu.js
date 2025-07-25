'use client';
function HamburguerMenu(){
  return (
        <div className="absolute top-1/3 right-3 cursor-pointer"
             onClick={()=>{
                return(
                    <div>
                        <h1>Hola mundo</h1>
                    </div>
                )
             }}
        >
            <svg
                width="52"
                height="52"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
                fill="currentColor"
                />
                <path
                d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
                fill="currentColor"
                />
                <path
                d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
                fill="currentColor"
            />
        </svg>
            <div className="menu fixed w-full h-full top-0 left-0 hidden bg-red-500"
            >
                
            </div>
        </div>
        )
}
export default HamburguerMenu;