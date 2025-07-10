'use client';
import { Box, Grid, TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import ProductsGrid from "@/components/ProductsGrid";
import ProductSkeleton from "@/components/ProductSkeleton";
import Carousel from "@/components/Carousel";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const carrouselImages = ['bgh', 'ciroc', 'daikin', 'goodman', 'gree', 'midea', 'samsung', 'surrey', 'westric', 'york']

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
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();

  }, []);

  return (
    <Box sx={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      background: `radial-gradient(circle at top, #c7e4ea 0%, #E4E4E4 30%)`,
    }}>

      <Carousel visibleItemsCount={4} withIndicator isInfinite>
        {
          carrouselImages.map((brand, i) => (
            <Image
              key={i}
              src={`/brands/${brand}.png`}
              alt={`${brand}`}
              width={200}
              height={100}
            />
          ))
        }
      </Carousel>
      {!loading ?
        <Grid container width={'100%'} size={{ xs: 12, sm: 8, md: 10 }}>
          <ProductsGrid products={products} />
        </Grid>
        :
        <Grid container width={'100%'} size={{ xs: 12, sm: 8, md: 10 }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            paddingTop: '40px',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 2,
            paddingX: 2,
          }}>
            <TextField
              variant="outlined"
              placeholder="Buscar producto..."
              value={'Cargando productos...'}
              sx={{ mb: 3, width: '50%' }}
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start"><Search /></InputAdornment>,
                },
              }}
            />

            <Box sx={{
              display: 'flex',
              flexGrow: 0,
              flexShrink: 0,
              flexBasis: 0,
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              flexWrap: 'wrap',
              marginBottom: 4,
            }}>
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
            </Box>



          </Box>
        </Grid>
      }
    </Box >
  );
}