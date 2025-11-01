
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { nanoid } from "nanoid"
import { asyncAddProduct } from "../store/actions/productAction"

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const dispatch = useDispatch()

  const onSubmit = (data) => {
    const productId = nanoid()
    const productData = { ...data, productId }

    // Dispatch Redux action to create product
    dispatch(asyncAddProduct(productData))

    console.log("✅ Product Created:", productData)
    reset()
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg p-6 sm:p-8 rounded-2xl bg-[#111] border border-gray-700 shadow-[0_0_25px_rgba(255,255,255,0.1)]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-6">
          Create Product
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Product Title */}
          <div>
            <label className="block text-sm sm:text-base font-medium text-gray-300 mb-1">
              Product Title
            </label>
            <input
              type="text"
              placeholder="Enter product title"
              {...register("title", { required: "Title is required" })}
              className={`w-full px-4 py-2 border rounded-xl bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:outline-none transition-all ${
                errors.title
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-600 focus:ring-white"
              }`}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm sm:text-base font-medium text-gray-300 mb-1">
              Price
            </label>
            <input
              type="number"
              placeholder="Enter product price"
              {...register("price", {
                required: "Price is required",
                min: { value: 1, message: "Price must be greater than 0" },
              })}
              className={`w-full px-4 py-2 border rounded-xl bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:outline-none transition-all ${
                errors.price
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-600 focus:ring-white"
              }`}
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm sm:text-base font-medium text-gray-300 mb-1">
              Description
            </label>
            <textarea
              placeholder="Enter product description"
              {...register("description", {
                required: "Description is required",
              })}
              className={`w-full px-4 py-2 border rounded-xl bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:outline-none transition-all ${
                errors.description
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-600 focus:ring-white"
              }`}
              rows="4"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm sm:text-base font-medium text-gray-300 mb-1">
              Image URL
            </label>
            <input
              type="url"
              placeholder="Enter product image URL"
              {...register("imageUrl", {
                required: "Image URL is required",
                pattern: {
                  value:
                    /^(https?:\/\/.*\.(?:png|jpg|jpeg|webp|gif|svg|avif))$/i,
                  message: "Enter a valid image URL",
                },
              })}
              className={`w-full px-4 py-2 border rounded-xl bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:outline-none transition-all ${
                errors.imageUrl
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-600 focus:ring-white"
              }`}
            />
            {errors.imageUrl && (
              <p className="text-red-500 text-sm mt-1">
                {errors.imageUrl.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white text-black py-2 sm:py-3 rounded-xl font-semibold hover:bg-gray-200 active:scale-95 transition duration-150"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateProduct
