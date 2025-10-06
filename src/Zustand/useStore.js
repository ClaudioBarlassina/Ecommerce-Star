import {create} from "zustand"
import { devtools } from "zustand/middleware";


const useStore = create(devtools((set) => ({
    Menu: false,
    Submenu: null,
    menuCarrito:false,
    // Contenidos
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
   ClosemenuCarrito:()=>set({menuCarrito:false})
// Productos Carrito

    
})))
export default useStore;