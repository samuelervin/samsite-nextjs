'use client'

interface SearchBarProps {
    searchValue: string;
    setSearchValue: (value: string) => void;
}

export default function SearchBar({ searchValue, setSearchValue }: SearchBarProps) {
   
     return (
        <div className="w-full max-w-sm min-w-[200px]">
            <div className="relative">
                <input      
                       className="peer w-full bg placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 
                                  rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400
                                  hover:border-slate-300 shadow-sm focus:shadow"
                       placeholder='Type Here' 
                       value={searchValue} onChange={(e) => { setSearchValue(e.target.value)}}
                       defaultValue={searchValue} />
            </div>
        </div>
                

    )
}