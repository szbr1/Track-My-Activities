import { useRouter, useSearchParams } from "next/navigation"

function Sort() {
        const router = useRouter()
        const searchParams =  useSearchParams()

        const handleClick = (e) => {
          const sortBy = e.target.value;
      
          // Clone existing params and set new sortBy value
          const params = new URLSearchParams(searchParams.toString());
          params.set('sortBy', sortBy);
      
          router.push(`/collections/all?${params.toString()}`, { shallow: true });
        };
  return (
    <div className="flex justify-end items-center">
        <select
        onChange={handleClick}
        value={searchParams.get("sortBy") || ""}
         id="sort" className="border p-2 ouline-none rounded-md">
          <option value="">Default</option>
          <option value="Asc">Price: Low to High</option>
          <option value="Des">Price: High to Low</option>
          <option value="Popularity">Popularity</option>
        </select>
    </div>
  )
}

export default Sort