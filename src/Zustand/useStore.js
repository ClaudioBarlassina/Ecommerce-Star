import {create} from "zustand"
import { devtools } from "zustand/middleware";
import { getProductos } from '../services/supabaseService'


const useStore = create(devtools((set) => ({
    Menu: false,
    Submenu: null,
    menuCarrito:false,

    // Contenidos
    Productos:[],
    Carrito:[],
   
// menu
    botonMenu: () => set((state) =>({Menu : !state.Menu})),
    openMenu: ()=> set({Menu:true}),
    closeMenu: ()=>set({Menu: false}),
// Submenu

   Accsubmenu: (index)=> set((state => ({Submenu:!state.Submenu === index ? null : index}))),
//Apertura/cierre carrito
   menuCart: ()=>set((state) => ({menuCarrito:!state.menuCarrito})),
   OpenMenuCart: ()=>set({menuCarrito:true}),
   ClosemenuCarrito:()=>set({menuCarrito:false}),
// Productos 
fetchProductos: async () => {
    const data = await getProductos()  //llama supaService que llama y lo ingresa al estado 
    set({ Productos: data })
  },
setProductos: (productos) => set({ Productos: productos }),


    
})))
export default useStore;