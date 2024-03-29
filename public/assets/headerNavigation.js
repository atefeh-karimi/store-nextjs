export const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops" },
            { name: "Dresses" },
            { name: "Pants" },
            { name: "Denim" },
            { name: "Sweaters" },
            { name: "T-Shirts" },
            { name: "Jackets" },
            { name: "Activewear" },
            { name: "BrowseAll" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches" },
            { name: "Wallets" },
            { name: "Bags" },
            { name: "Sunglasses" },
            { name: "Hats" },
            { name: "Belts" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson" },
            { name: "My Way" },
            { name: "Re-Arranged" },
            { name: "Counterfeit" },
            { name: "Significant Other" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-03.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops" },
            { name: "Pants" },
            { name: "Sweaters" },
            { name: "T-Shirts" },
            { name: "Jackets" },
            { name: "Activewear" },
            { name: "Browse All" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches" },
            { name: "Wallets" },
            { name: "Bags" },
            { name: "Sunglasses" },
            { name: "Hats" },
            { name: "Belts" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged" },
            { name: "Counterfeit" },
            { name: "Full Nelson" },
            { name: "My Way" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Women", href: "/products/women" },
    { name: "Men", href: "/products/men" },
    { name: "Category", href: "/products/category" },
    { name: "Stores", href: "/stores" },
  ],
};
