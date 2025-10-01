import {create} from "zustand"
import { devtools } from "zustand/middleware";


const useStore = create(devtools((set) => ({
    Menu: false,
    Submenu: null,
   
// menu
    botonMenu: () => set((state) =>({Menu : !state.Menu})),
    openMenu: ()=> set({Menu:true}),
    closeMenu: ()=>set({Menu: false}),
// Submenu

   Accsubmenu: (index)=> set((state => ({Submenu:!state.Submenu === index ? null : index}))) 



    
})))
export default useStore;