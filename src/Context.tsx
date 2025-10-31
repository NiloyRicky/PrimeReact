import  React,{ createContext ,useContext,useEffect,useState} from "react"
import type { ReactNode } from "react";







export interface Artwork {
  id: number;
  title: string;
  place_of_origin: string;
  artist_display: string;
  inscriptions: string | null;
  date_start: number;
  date_end: number;
}

 interface ApiResponse {
  data: Artwork[];
   pagination: {
    total: number;
  }
}

interface ArtContextType {
  artworks: Artwork[];
   isLoading:boolean;
   totalRecords: number;
    page: number;
     selectedArtworks: Artwork[];
  setSelectedArtworks: React.Dispatch<React.SetStateAction<Artwork[]>>;
    handlePageChange: (newPage: number) => void
}


const ArtContext = createContext<ArtContextType | undefined>(undefined);

export  function ArtProvider({children}:{children:ReactNode}){


      const [artworks, setArtworks] = useState<Artwork[]>([]);
   const[page,setPage]=useState(1)
   const[isLoading,setIsloading]=useState(false);
   const [totalRecords, setTotalRecords] = useState(0);
   const [selectedArtworks, setSelectedArtworks] = useState<Artwork[]>([]);
  useEffect(()=>{
dataFetching(page);
  },[page])


  const dataFetching=async(pageNumber:number):Promise<void>=>{
 try {
    setIsloading(true);
      const res=await fetch(`https://api.artic.edu/api/v1/artworks?page=${pageNumber}`);
     const json:ApiResponse=await res.json();
     console.log(json.data)
     setArtworks(json.data);
     setTotalRecords(json.pagination.total)
     setIsloading(false)
    // console.log(`${artworks.title}`)
  
 } catch (error) {
  console.error("Error fetching data:", error);
 }
  }


  // 🔁 Handle page change event
  const handlePageChange = (event: any) => {
    const newPage = event.page + 1; 
    setPage(newPage);
    
  };


    return(
        <ArtContext.Provider 
        value={{ artworks,handlePageChange ,isLoading,totalRecords,page,selectedArtworks,setSelectedArtworks}}
        >{children}</ArtContext.Provider>
    )
}

export const useGlobal = (): ArtContextType => {
  const context = useContext(ArtContext);
  if (!context) {
    throw new Error("useGlobal must be used within an ArtProvider");
  }
  return context;
};