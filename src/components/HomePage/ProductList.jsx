
import BootstrapCard from './BootstrapCard';

const ProductList = () => {
  // Array of product data (for demonstration)
  const products = [
    { text: "Apple IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium", price: "$110", img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/122749/1.jpg?5260" },
    { text: "Apple IPhone 15 Pro Max 512gb - Nano Sim - Blue Titanium", price: "$150", img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/58/0390262/1.jpg?9778" },
    { text: "35W Iphone Usb-c To Lightning PD Fast Lightning Charger", price: "$10.01", img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/0766652/1.jpg?8838" },
    { text: "Apple IPhone 15 Pro Max 256gb - Nano Sim - Blue Titanium", price: "$950.20", img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/81/0390262/1.jpg?9046" },
    { text: "Apple IPhone 6s Plus USA-Version 95%-99% New - Space Gray", price: "$70.06", img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/8176121/1.jpg?4799" },
    { text: "Apple IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium", price: "$110", img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/122749/1.jpg?5260" },
    { text: "Apple IPhone 15 Pro Max 512gb - Nano Sim - Blue Titanium", price: "$150", img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/58/0390262/1.jpg?9778" },
    { text: "35W Iphone Usb-c To Lightning PD Fast Lightning Charger", price: "$10.01", img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/0766652/1.jpg?8838" },
    { text: "Apple IPhone 15 Pro Max 256gb - Nano Sim - Blue Titanium", price: "$950.20", img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/81/0390262/1.jpg?9046" },
    { text: "Apple IPhone 6s Plus USA-Version 95%-99% New - Space Gray", price: "$70.06", img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/8176121/1.jpg?4799" },
    { text: "Apple IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium", price: "$110", img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/122749/1.jpg?5260" },
    { text: "Apple IPhone 15 Pro Max 512gb - Nano Sim - Blue Titanium", price: "$150", img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/58/0390262/1.jpg?9778" },
    { text: "Apple IPhone 6s Plus USA-Version 95%-99% New - Space Gray", price: "$70.06", img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/8176121/1.jpg?4799" },
    { text: "35W Iphone Usb-c To Lightning PD Fast Lightning Charger", price: "$10.01", img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/0766652/1.jpg?8838" },
    { text: "Apple IPhone 15 Pro Max 256gb - Nano Sim - Blue Titanium", price: "$950.20", img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/81/0390262/1.jpg?9046" },
    { text: "Apple IPhone 6s Plus USA-Version 95%-99% New - Space Gray", price: "$70.06", img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/8176121/1.jpg?4799" },
    // Add more products as needed
  ];

  return (
    <div className="container" style={{ marginLeft: '230px' }}>
      <h1 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '10px' }}>
        Shop in United States
      </h1>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <BootstrapCard text={product.text} price={product.price} img={product.img} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
