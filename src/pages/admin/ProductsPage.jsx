import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

export default function AdminProductsPage() {
	const [products, setProducts] = useState(() => []);
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		if (isLoading) {
			axios
				.get(import.meta.env.VITE_BACKEND_URL + "/api/products")
				.then((res) => {
					setProducts(res.data);
					setIsLoading(false);
				})
				.catch((err) => {
					toast.error("Failed to load products");
					setIsLoading(false);
				});
		}
	}, [isLoading]);

	function deleteProduct(productId) {
		const token = localStorage.getItem("token");
		if (!token) {
			toast.error("Please login first");
			return;
		}
		axios
			.delete(`${import.meta.env.VITE_BACKEND_URL}/api/products/${productId}`, {
				headers: {
					Authorization: "Bearer " + token,
				},
			})
			.then(() => {
				toast.success("Product deleted successfully");
				setIsLoading(true);
			})
			.catch((e) => {
				toast.error(e.response?.data?.message || "Failed to delete");
			});
	}

	return (
		<div className="w-full h-full max-h-full overflow-y-auto relative p-6">
			<Link
				to="/admin/add-product"
				className="fixed bottom-6 right-6 bg-accent text-white text-2xl rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-opacity-90"
			>
				+
			</Link>

			{isLoading ? (
				<div className="flex justify-center items-center h-full">
					<div className="w-[70px] h-[70px] border-4 border-gray-300 border-t-accent rounded-full animate-spin"></div>
				</div>
			) : (
				<div className="overflow-x-auto">
					<table className="w-full text-left border border-gray-200 shadow-sm">
						<thead className="bg-accent text-white">
							<tr>
								<th className="py-3 px-4">ID</th>
								<th className="py-3 px-4">Name</th>
								<th className="py-3 px-4">Image</th>
								<th className="py-3 px-4">Labelled Price</th>
								<th className="py-3 px-4">Price</th>
								<th className="py-3 px-4">Stock</th>
								<th className="py-3 px-4">Actions</th>
							</tr>
						</thead>
						<tbody>
							{products.map((product, index) => (
								<tr
									key={index}
									className={`${
										index % 2 === 0 ? "bg-[var(--color-primary)]" : "bg-gray-100"
									} hover:bg-gray-200 transition`}
								>
									<td className="py-3 px-4">{product.productId}</td>
									<td className="py-3 px-4">{product.name}</td>
									<td className="py-3 px-4">
										<img
											src={product.images[0]}
											alt={product.name}
											className="w-12 h-12 object-cover rounded"
										/>
									</td>
									<td className="py-3 px-4">Rs. {product.labelledPrice}</td>
									<td className="py-3 px-4">Rs. {product.price}</td>
									<td className="py-3 px-4">{product.stock}</td>
									<td className="py-3 px-4">
										<div className="flex gap-3">
											<button
												onClick={() =>
													navigate("/admin/edit-product", { state: product })
												}
												className="text-blue-600 hover:text-blue-800"
												title="Edit"
											>
												<FaEdit size={18} />
											</button>
											<button
												onClick={() => deleteProduct(product.productId)}
												className="text-red-600 hover:text-red-800"
												title="Delete"
											>
												<FaTrash size={18} />
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
}
