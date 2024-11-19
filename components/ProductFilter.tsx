interface ProductFilterProps {
  onFilterChange: (category: string) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ onFilterChange }) => {
  return (
    <select
      onChange={(e) => onFilterChange(e.target.value)}
      className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    >
      <option value="">All Categories</option>
      <option value="classic">Classic</option>
      <option value="modern">Modern</option>
      <option value="premium">Premium</option>
    </select>
  );
};

export default ProductFilter;
