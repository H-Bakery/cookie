import { Meta } from "./Meta";
import { AppConfig } from "../utils/AppConfig";
import { Footer } from "../components/footer/Index";
import { Header } from "../components/header";
import { Box } from "@mui/material";
interface Props {
  children: React.ReactNode;
}
const Base: React.FC<Props> = ({children}) => (
  <Box 
    sx={{
      background: 'radial-gradient(143.25% 143.25% at 50% 100%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #D8E1F4'
    }}  
  >
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header />
    {children}
    <Footer />
  </Box>
);

export { Base };
