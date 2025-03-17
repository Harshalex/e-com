import { useEffect } from "react";
import { useProductStore } from "../stores/useProductStore";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const CategoryPage = () => {
	const { fetchProductsByCategory, products } = useProductStore();

	const { category } = useParams();

	useEffect(() => {
		fetchProductsByCategory(category);
	}, [fetchProductsByCategory, category]);

	console.log("products:", products);
	return (
		<div className='min-h-screen'>
			<div className='relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				{/* Removed motion for h1 */}
				<h1 className='text-center text-4xl sm:text-5xl font-bold text-emerald-400 mb-8'>
					{category.charAt(0).toUpperCase() + category.slice(1)}
				</h1>

				{/* Removed motion for div */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center'>
					{products?.length === 0 && (
						<h2 className='text-3xl font-semibold text-gray-300 text-center col-span-full'>
							No products found
						</h2>
					)}

					{products?.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</div>
			</div>
		</div>
	);
};
export default CategoryPage;
