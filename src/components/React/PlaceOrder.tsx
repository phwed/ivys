import React from "react";

export default function Order({ data }: { data: any }) {
  const [quantity, setQuantity] = React.useState(1);

  const {price } = data.fields;

  console.log(data, 'data')

  console.log(quantity, 'quantity')

  return (
    <div className="flex flex-col gap-10">
      {/* quantity */}
      <div className="flex flex-col gap-4">
        <label className="text-sm">Quantity</label>
        <div className="flex flex-row gap-5 items-center">
          <input
            type="number"
            value={quantity}
            //@ts-ignore
            onChange={(e) => setQuantity(e.target.value)}
            className="bg-neutral-200 p-2 rounded-md w-[10ch]"
          />

          <span>GHS {price * quantity}</span>
        </div>
      </div>

      {/* place order: This opens whatsapp using wa.me/number with the name of the product and quantity as the message body */}
      <div className="flex flex-col gap-4">
        <button
          className="bg-pink-300 hover:bg-pink-400 text-white px-5 py-2 rounded-md"
          onClick={() => window.open(`https://wa.me/233556821729?text=Hi%20Ivy's%20Pastries%20I%20want%20to%20buy%20${data.fields.product}%20x%20${quantity}`)}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
