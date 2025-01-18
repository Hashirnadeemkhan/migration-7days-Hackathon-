export const carSchema = {
  name: "car",
  title: "Car",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "type", title: "Type", type: "string" },
    {
      name: "specs",
      title: "Specifications",
      type: "object",
      fields: [
        { name: "fuel", title: "Fuel Capacity", type: "number" },
        { name: "transmission", title: "Transmission", type: "string" },
        { name: "capacity", title: "Passenger Capacity", type: "number" },
      ],
    },
    { name: "price", title: "Price", type: "number" },
    { name: "oldPrice", title: "Old Price", type: "number",
      
     },
    { name: "isFavorite", title: "Is Favorite", type: "boolean" },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // Enables image cropping
      },
    },
  ],
};


