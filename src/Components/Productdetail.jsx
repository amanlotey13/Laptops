import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Assuming 'items' is imported from a separate file or defined above.
 const items=[
    {
        id:1,
        category:'laptops',
        title:"Apple",
        imgSrc:'https://bgr.com/wp-content/uploads/2021/12/16-macbook-pro-8.jpg?quality=82&strip=all',
        Description:'Apple 2022 MacBook AIR Apple M2 - (8 GB/256 GB SSD/Mac OS Monterey) MLY33HN/A  (13.6 Inch, Midnight, 1.24 Kg)',
        price:'1,40,999'
    },
    
    {
        id:2,
        category:'laptops',
        title:"Apple",
        imgSrc:'https://th.bing.com/th/id/R.c88282c5ca84a14bde41a8a277013437?rik=hicKFKO5IW8dzQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fetXyPN5.jpg&ehk=KZOe7zYCKHj9uWfvx9kGgZANowxseJsc04ZJIaeIjHQ%3d&risl=&pid=ImgRaw&r=0',
        Description:'Apple 2023 MacBook Pro Apple M3 Max - (36 GB/1 TB SSD/macOS Sonoma) MRW33HN/A  (16 Inch, Space Black, 2.16 kg)',
        price:'1,21,999'
    },
    
    {
        id:3,
        category:'mac',
        title:"Apple",
        imgSrc:'https://i5.walmartimages.com/asr/e3ced41b-70f0-4afa-813a-6aa923980501_2.0388a3cf5a00012a75f3d3898a4d1062.jpeg',
        Description:' Apple MacBook Pro 15-Inch Retina Laptop i7 2.8GHz - 4.0GHz / 16GB DDR3 Ram ',
        price:'1,18,899'
    },
    
    {
        id:4,
        category:'laptops',
        title:"HP",
        imgSrc:'https://in-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/c/0/c08509660_1_8.png',
        Description:"HP OMEN 40.9 cm (16.1) Gaming Laptop 16 wf0061TX, Black",
        price:"70,999"
    },
    
    {
        id:5,
        category:'laptop',
        title:"HP",
        imgSrc:'https://in-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/c/0/c08252924_4.png',
        Description:"HP Pavilion x360 35.6 cm (14) 2-in-1 Laptop 14-ek1021TU, Silver",
        price:'90,999'
    },
    
    
    {
        id:6,
        category:'laptops',
        title:"HP",
        imgSrc:'https://in-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/c/0/c08077457_1_1.png',
        Description:'HP Laptop 39.6 cm (15.6) 15s-eq2223AU, Silver',
        price:'41,099'
    },
    
    {
        id:7,
        category:'laptops',
        title:"Dell",
        imgSrc:'https://www.laptopspirit.fr/comparateur/images/fiches/2/G-29173-7-Dell-XPS-13-7390-7.jpg',
        Description:'DELL Inspiron 3520 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) New Inspiron 15 Laptop Thin and Light Laptop ',
        price:'60,000'
    },
    
    {
        id:8,
        category:'mac',
        title:"Dell",
        imgSrc:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6419/6419696_sd.jpg',
        Description:'DELL Inspiron 3520 Intel Core i5 12th Gen 1235U - (8 GB/512 GB SSD/Windows 11 Home) New Inspiron 15 Laptop Thin and Light Laptop  (15.6 Inch, Carbon Black, 1.65 Kg, With MS Office)',
        price:'55,999'
    },
    
    {
        id:9,
        category:'laptops',
        title:"Dell",
        imgSrc:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/xps_15_4.jpg',
        Description:'DELL Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) New Inspiron 15 Laptop Thin and Light Laptop  ',
        price:'54,499'
    },
    
    {
        id:10,
        category:'laptops',
        title:"Asus",
        imgSrc:'https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https:%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F05%2FAsusProduo.jpg&signature=ff1b7239a741beaa31a1cd5cfe07b841',
        Description:'ASUS TUF Gaming F15 - AI Powered Gaming Intel Core i5 11th Gen 11260H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics',
        price:'50,999'
    },
    
    {
        id:11,
        category:'laptops',
        title:"Asus",
        imgSrc:'https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/ASUS_U47VC_DS51_14_1_Notebook_Computer_1342093580_855832.jpg',
        Description:'ASUS U47VC-DS51 14.1" Laptop Computer (Silver)',
        price:'55,799'
    },
    
    {
        id:12,
        category:'laptops',
        title:"Asus",
        imgSrc:'https://beebom.com/wp-content/uploads/2020/08/asus-proart.jpg',
        Description:'ASUS Vivobook 14 (2023) Intel Core i3 13th Gen 1315U - (8 GB/512 GB SSD/Windows 11 Home) ',
        price:'53,000'
    },
    
    {
        id:13,
        category:'laptops',
        title:"Lenovo",
        imgSrc:'https://th.bing.com/th/id/R.6597e630166fcacaa06bfd45a2e65c84?rik=WB9qMLDlz16aWg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-QxhaU63xHog%2fT_uJwaUntGI%2fAAAAAAAAAKI%2fhIz1hFdQWOE%2fs1600%2fLenovo%2bG570%2b4334DBU%2b15.6-Inch%2bLaptop%2b(Black).jpg&ehk=y%2fdfeUDGD4PkQsz%2b4et7zoExYGPG5nXdhqL3S57j1Ds%3d&risl=&pid=ImgRaw&r=0',
        Description:'Lenovo V15 AMD Ryzen 3 Quad Core 7320U - (8 GB/512 GB SSD/Windows 11 Home) V15 G4 AMN 1 Thin and Light Laptop ',
        price:'45,999'
    },
    
    {
        id:14,
        category:'laptops',
        title:"Lenovo",
        imgSrc:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6369/6369421_rd.jpg',
        Description:'Lenovo LOQ (2024) AMD Ryzen 5 Quad Core 7235HS - (24 GB/512 GB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 3050) 15ARP9 Gaming Laptop  (15.6 Inch, Luna Grey, 2.38 Kg, With MS Office)',
        price:'48,899'
    },
    
    {
        id:15,
        category:'laptops',
        title:"Lenovo",
        imgSrc:'https://th.bing.com/th/id/R.9ccc58e8acbc4ebe0da2bbbfeafaa466?rik=fQcbQ0Ppq2xprA&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0192%2f2088%2f9664%2fproducts%2flenovo-computers-tablets-networking-laptops-netbooks-pc-laptops-netbooks-lenovo-thinkpad-x1-carbon-7th-gen-4k-laptop-8th-gen-i7-512gb-16gb-lte-vat-13472618315847_1200x1200.jpg%3fv%3d1579488280&ehk=VEX9ZxS5w%2b5sV0EVcrh89YGNm1ZY4%2bSO%2bZfpdALt310%3d&risl=&pid=ImgRaw&r=0',
        Description:'Lenovo IdeaPad Flex 5 Intel Core i3 13th Gen 1315U - (8 GB/512 GB SSD/Windows 11 Home) 14IRU8 2 in 1 Laptop',
        price:'44,899'
    },
    
    {   id:16,
        category:'laptops',
        title:"Acer",
        imgSrc:'https://i5.walmartimages.com/asr/8b0db4c6-d69f-46b2-be45-296afb892380.3a0d19dbcfe0e760e7ab388b45b4f71f.jpeg',
        Description:'Acer Swift Go 14 EVO OLED Intel Core i5 13th Gen 13500H - (16 GB/512 GB SSD/Windows 11 Home) ',
        price:'42,599'
    },
    
    {
        id:17,
        category:'laptops',
        title:"Acer",
        imgSrc:'https://m.media-amazon.com/images/I/71gD-Iw5mbS.jpg',
        Description:'Acer One (2024) Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) AO 14 Z 8-415 Thin and Light Laptop  (14 Inch, Silver, 1.49 Kg)',
        price:'40,999'
    },
    
    {
        id:18,
        category:'laptops',
        title:"Acer",
        imgSrc:'https://i5.walmartimages.com/asr/e959a0b6-50ac-47b9-9c67-e6698a7e94a5_1.0e5340993e81e302a90d96546ac9d063.jpeg',
        Description:'Acer Aspire 7 (2024) Intel Core i5 12th Gen 12450H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 2050)',
        price:'39,999'
    },
    
    ]

function ProductDetail() {
  const { id } = useParams();
  const numericId = parseInt(id, 10); // Convert the ID to a number
  const product = items.find(item => item.id === numericId);

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product ? parseFloat(product.price.replace(/,/g, '')) : 0);

  const navigate = useNavigate();

  // Update total price when quantity changes
  useEffect(() => {
    if (product) {
      setTotalPrice(quantity * parseFloat(product.price.replace(/,/g, '')));
    }
  }, [quantity, product]);

  // Handle quantity change
  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0)); // Ensure quantity is at least 1
  };

  const handleBuyNow = () => {
    // Navigate to the checkout page
    navigate('/checkout', { state: { product, quantity, totalPrice } });
  };

  if (!product) return <div>Product not found</div>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <img src={product.imgSrc} className="img-fluid" alt={product.title} />
        </div>
        <div className="col-lg-6">
          <h1>{product.title}</h1>
          <h4>{product.Description}</h4>
          <h4>INR: {product.price}</h4>
          <h4>Total Price: {totalPrice.toLocaleString()}</h4>
          <div class="rating">
  <span class="star">★</span>
  <span class="star">★</span>
  <span class="star">★</span>
  <span class="star">★</span>
  <span class="star">★</span>
</div>
          <div className="d-flex align-items-center">
            <button className="btn btn-secondary me-2" type="button" onClick={decrementQuantity}>-</button>
            <span className="me-2">{quantity}</span>
            <button className="btn btn-secondary" type="button" onClick={incrementQuantity}>+</button>
          </div>
          <button className="btn btn-primary mt-3" type="button" onClick={handleBuyNow}>Buy Now</button>
          {/* Add more details or actions here */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
