'use client';
import { Box, Grid } from "@mui/material";
import ProductsList from "@/components/ProductsList";
import ProductsGrid from "@/components/ProductsGrid";

export default function Products() {
  // TODO: Fetch products from an API or database
  // Expecting:
  // {
  //   name: String,
  //   description: String,
  //   image: String, // URL to the product image
  // }
  const products = Array.from({ length: 120 }, (_, i) => ({ name: `item ${i + 1}`, description: `Description for item ${i + 1}`, price: (i + 1) * 10, image: `https://picsum.photos/315/200?random=${i + 1}` }));

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