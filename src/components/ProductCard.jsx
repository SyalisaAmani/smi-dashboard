import { Info } from "lucide-react";

function ProductCard(props) {
    return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md active:scale-[0.99] active:shadow-sm">
        <img src={props.product.thumbnail} alt={props.product.title} className="mb-4 h-48 w-full rounded-xl bg-gray-50 object-contain p-3 transition duration-300 hover:scale-105" />
        <h3 className="mb-2 line-clamp-2 text-base font-semibold text-gray-800">{props.product.title}</h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-gray-500">{props.product.description}</p>
        <hr className="my-4 border-gray-200" />
        <div className="mt-4 flex items-center justify-between gap-3">
            <p className="text-lg font-bold text-red-900">Rp {props.product.price.toLocaleString('id-ID')}</p>
            <button type="button"  onClick={() => props.onDetailClick(props.product)} className="inline-flex items-center gap-2 rounded-lg border border-red-900 px-3 py-2 text-sm text-red-900 transition-all duration-200 ease-out hover:bg-red-900 hover:text-white active:scale-90 active:bg-red-950">
                <Info size={10} />
                Lihat Detail
            </button>
        </div>
    </article>
    )
}

export default ProductCard;