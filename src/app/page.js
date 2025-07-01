'use client';
import { Box, Grid } from "@mui/material";
import ProductsList from "@/components/ProductsList";
import ProductsGrid from "@/components/ProductsGrid";

import { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}products/api/`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched products:', response);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();

  }, []);

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "row",
      flex: 1,
    }}>

      <Grid container width={'100%'}>
        <Grid size={{ xs: 0, sm: 4, md: 2 }} sx={{ display: { xs: "none", sm: "flex" } }}>
          <ProductsList products={products} />
        </Grid>

        <Grid size={{ xs: 12, sm: 8, md: 10 }}>
          <ProductsGrid products={products} />
        </Grid>

      </Grid>
    </Box >
  );
}
//  