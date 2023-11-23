import Banner from "@/components/Layouts/components/Banner";
import CategoryTab from "@/components/Layouts/components/CategoryTab";
import { Box, Container } from "@mui/material";
export default function Home() {
  return (
    <>
      <Container maxWidth="xl" sx={{ padding: "0 !important" }}>
        <Banner />
        <Box px={8}>
          <CategoryTab />
        </Box>
      </Container>
    </>
  );
}
