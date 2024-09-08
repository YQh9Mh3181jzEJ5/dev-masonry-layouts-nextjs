import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";

interface SearchFormProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSubmit: (event: React.FormEvent) => void;
}

export function SearchForm({
  searchQuery,
  setSearchQuery,
  onSubmit,
}: SearchFormProps) {
  return (
    <form onSubmit={onSubmit} className="max-w-3xl mx-auto">
      <div className="relative">
        <CiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
        <Input
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search photos..."
          className="py-8 pl-12  text-2xl"
        />
      </div>
    </form>
  );
}
