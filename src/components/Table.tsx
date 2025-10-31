import React,{useState,useEffect} from 'react'
import { useGlobal} from '../Context'
import { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
       
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-blue/theme.css"; // or another theme
import "primereact/resources/primereact.min.css";
import { InputSwitch } from 'primereact/inputswitch';
import { ChevronDown } from 'lucide-react';
        



interface Artwork {
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
  };
}


function Table() {
      //const [customers, setCustomers] = useState<Customer[]>([]);
       
    
    const [rowsSelected,setRowsSelected]=useState();
const op = useRef<OverlayPanel>(null);
const [rows] = useState(12);


  


//Receiving props from Context API
  const {artworks,handlePageChange,isLoading,totalRecords,page,selectedArtworks,setSelectedArtworks}=useGlobal()




const handleSubmit=async()=>{
const totalToSelect = Number(rowsSelected);
  const itemsPerPage = rows;
  const totalPagesNeeded = Math.ceil(totalToSelect / itemsPerPage);

  let allSelected: Artwork[] = [];
 //Handling persistent seklected pages across different pages
  for (let i = 1; i <= totalPagesNeeded; i++) {
    const res = await fetch(`https://api.artic.edu/api/v1/artworks?page=${i}`);
    const json: ApiResponse = await res.json();
    allSelected.push(...json.data);
  }

  // take only the number requested
  allSelected = allSelected.slice(0, totalToSelect);

  // merge into global selection
  setSelectedArtworks((prev) => {
    const newSelection = [...prev];
    allSelected.forEach((a) => {
      if (!newSelection.find((p) => p.id === a.id)) newSelection.push(a);
    });
    return newSelection;
  });

  op.current?.hide();
}


const overLay=(
     <OverlayPanel ref={op}
     
      style={{
    marginTop:"4rem",
      padding: "0.5rem",
      borderRadius: "10px",
      
    }}
     >
     <div style={{display:"flex",justifyContent:"center",flexDirection:"column",gap:"2rem"}}>
         <input type="text" value={rowsSelected} onChange={(e) => setRowsSelected(e.target.value)}placeholder='Enter Rows' style={{padding:"0.3rem"}}/>
        <button style={{background:"rgb(135, 206, 235)"}} type="button" onClick={handleSubmit} >Submit</button>
                </div>
            </OverlayPanel>
)


  return (
    <div className='card' >

    {isLoading==true?(<p>Loading...</p>):
    (
    <>
    
      <DataTable value={artworks} paginator   tableStyle={{ minWidth: '60rem' }}
       dataKey="id"   
      stripedRows
      rows={rows}
  totalRecords={totalRecords}
  lazy
  first={(page - 1) * rows}
       onPage={handlePageChange}
         selectionMode="multiple"
            selection={selectedArtworks}
            onSelectionChange={(e) => {
                 const newSelection = e.value;

    // merge selection across pages
    const merged = [
      ...selectedArtworks.filter(
        (a) => !artworks.some((b) => b.id === a.id)
      ),
      ...newSelection,
    ];
    setSelectedArtworks(merged);
            }}
      
      >
        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
        
                    <Column field="title"  style={{ width: "20%" }}
                    
                     header={
    <div style={{display:"flex",alignItems:"center",gap:"0.3rem"}}>
      <span>Title</span>
      <ChevronDown size={21} onClick={(e)=>op.current.toggle(e)} />
        {overLay}
    </div>
  }
                    />
        <Column field="place_of_origin" header="Place of Origin" style={{ width: "20%" }} />
        <Column field="artist_display" header="Artist" style={{ width: "20%" }} />
        <Column field="inscriptions" header="Inscriptions" style={{ width: "20%" }} />
        <Column field="date_start" header="Start Year" style={{ width: "10%" }} />
        <Column field="date_end" header="End Year" style={{ width: "10%" }} />
            </DataTable>
   
   </>)  }
       
       
    </div>
  )
}

export default Table